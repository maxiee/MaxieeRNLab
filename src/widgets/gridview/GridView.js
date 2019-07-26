import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import screen from '../../common/screen';
import GridItem from './GridItem';

export default (props) => {    
    return (
        <View style={styles.container}>
            {props.infos.map((info, index) => (
                <GridItem
                    info={info}
                    key={index}
                    onPress={() => props.onGridSelected(index)} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderTopWidth: screen.onePixel,
      borderLeftWidth: screen.onePixel,
      borderColor: '#e0e0e0'
    },
})