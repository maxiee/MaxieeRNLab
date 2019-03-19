import React, {Component} from 'react';
import { View, Image } from 'react-native';

export default () => {
    console.log("maxieeee :" + JSON.stringify(Image.getSize('react_native')))

    return <View>
        <Image 
            source={{uri: 'react_native'}} 
            style={{
                width: 200, 
                height: 150,
                borderWidth: 1,
                borderColor: '#999999'
            }}/>
    </View>
}