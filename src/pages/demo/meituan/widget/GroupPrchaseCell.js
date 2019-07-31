import React, { Component } from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { Heading2, Paragraph } from '../../../../widgets/text/Text';
import screen from '../../../../common/screen';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: "#21C0AE"
    }
})
  
export class GroupPurchaseCell extends Component {
    render() {
        let { info } = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0');

        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.onPress(info)}>
                    <Image source={{ uri: imageUrl }} style={ styles.icon } />

                    <View style={styles.rightContainer}>
                        <Heading2>{info.title}</Heading2>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8}}>{info.subtitle}</Paragraph>
                        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                            <Heading2 style={styles.price}>{info.price}元</Heading2>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
}