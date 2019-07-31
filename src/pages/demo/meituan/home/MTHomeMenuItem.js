import React, { Component } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import screen from '../../../../common/screen';
import { Heading3 } from '../../../../widgets/text/Text';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: screen.width / 5,
      height: screen.width / 5,
    },
    icon: {
      width: screen.width / 9,
      height: screen.width / 9,
      margin: 5,
    }
  });

export default class MTHomeMenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                    <Image 
                        source={this.props.icon}
                        resizeMode='contain'
                        style={styles.icon} />
                    <Heading3>
                        {this.props.title}
                    </Heading3>
            </TouchableOpacity>
        )
    }
}