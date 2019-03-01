import React from "react";
import { View, Text, Button } from "react-native";

export default (props) => <View>
    <Text>HomePage</Text>
    <Button 
        title="React Navigation Demo"
        onPress={() => props.navigation.navigate('ReactNavigation')}
    />
</View>