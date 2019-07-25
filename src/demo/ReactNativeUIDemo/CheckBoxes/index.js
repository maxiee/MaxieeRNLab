import React, {Component} from 'react';
import { View, CheckBox } from 'react-native';

export default () => {
    return <View>
        <CheckBox onValueChange={bool => console.log("check = " + bool)} />
    </View>
}