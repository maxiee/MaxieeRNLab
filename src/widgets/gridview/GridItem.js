import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import screen from '../../common/screen';
import { Heading2, Heading3 } from '../text/Text';

export default class GridItem extends PureComponent {
    render() {
        let info = this.props.info

        let title = info.title
        let color = info.color
        let subtitle = info.subtitle || info.deputytitle
        let imageUrl = info.imageurl
        
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={this.props.onPress}>
                    <View style={{width: screen.width / 4}}>
                        <Heading2 style={{ color: color}}>{title}</Heading2>
                        { subtitle ? <Heading3 style={{marginTop: 10}}>{subtitle}</Heading3> : null}
                    </View>

                    { imageUrl ? <Image style={styles.icon} source={imageUrl} /> : null }
                    { info.icon ? <View style={styles.icon} >{info.icon}</View> : null}
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
        width: screen.width / 9,
        height: screen.width / 9,
        marginLeft: 10
    }
})