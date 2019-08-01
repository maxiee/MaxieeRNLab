import React, { Component } from 'react'
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Heading3, Paragraph } from '../../../../widgets/text/Text';
import screen from '../../../../common/screen';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    content: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 10,
    },
    icon: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    subtitleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    arrow: {
      width: 14,
      height: 14,
      marginLeft: 5,
    }
  })

export default class DetailCell extends Component {
    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Heading3>{this.props.title}</Heading3>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <Paragraph style={{ color: '#999999'}}>{this.props.subtitle}</Paragraph>
                        <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')} />
                    </View>
                    
                    <View style={{
                        width: screen.width,
                        height: screen.onePixel,
                        backgroundColor: '#e0e0e0'
                    }} />
                </TouchableOpacity>

            </View>
        )
    }
}