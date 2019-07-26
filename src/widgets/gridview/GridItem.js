import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import screen from '../../common/screen';
import { Heading2, Heading3 } from '../text/Text';

export default class GridItem extends PureComponent {
    render() {
        let info = this.props.info

        let title = info.title
        let color = info.color
        let subtitle = info.subtitle
        let imageUrl = info.imageurl
        
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={this.props.onPress}>
                    <View>
                        <Heading2 style={{ color: color, marginBottom: 10 }}>{title}</Heading2>
                        { subtitle ? <Heading3>{subtitle}</Heading3> : null}
                    </View>

                    { imageUrl ? <Image style={styles.icon} source={{ uri: imageUrl }} /> : null }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - screen.onePixel,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: screen.onePixel,
        borderRightWidth: screen.onePixel,
        borderColor: '#e0e0e0'
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
    }
})