import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

export default (props) => <View style={styles.Container}>
    <Text h3>React Native UI</Text>
    <View style={styles.Section}>
        <Button 
            title="React Native Elements Demo"
            onPress={() => props.navigation.navigate('ReactNavigation')}
            type="outline" />

    </View>
    <Text h3>React Native Architecture</Text>
    <View style={styles.Section}>
        <Button 
            title="React Navigation Demo"
            onPress={() => props.navigation.navigate('ReactNavigation')}
            type="outline" />

    </View>
    
</View>

const styles = StyleSheet.create({
    Container: {
        flex:1,
        margin: 8
    },
    Section: {
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center'
    }
}) 