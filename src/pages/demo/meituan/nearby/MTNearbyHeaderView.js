import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Paragraph } from '../../../../widgets/text/Text';
import screen from '../../../../common/screen';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      width: screen.width / 4 - 10,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: screen.onePixel,
      borderColor: '#e0e0e0',
    },
})

export class MTNearbyHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        style={[{backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white'}, styles.item]}>
                            <Paragraph style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>
                                {title}
                            </Paragraph>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}