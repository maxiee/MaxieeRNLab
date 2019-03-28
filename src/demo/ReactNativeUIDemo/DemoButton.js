import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { RkButton, RkText } from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { Button as ButtonPaper } from 'react-native-paper'

export default () => {
    let createDemo = (title, Comp) => <View>
        <Text h4 style={styles.demoText}>{title}</Text>
        {Comp}
    </View>

    let createTitle = (title) => <Text h3 style={styles.header}>{title}</Text>
    return (
        <View style={{ margin: 10 }}>
            {createTitle("Normal Button")}
            {createDemo(
                "UI Kitten", 
                <RkButton>Button</RkButton>)}
            {createTitle("Gradient Button")}
            {createDemo(
                "RN TouchableOpacity", 
                <TouchableOpacity>
                    <LinearGradient
                        style={styles.LinearGradientStyle}
                        colors={['#ff9147', '#ff524c']}
                        start={{ x: 0.0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.buttonText}>Button</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )}
        </View>
    )
} 

const styles = StyleSheet.create({
    LinearGradientStyle: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color : '#fff',
        backgroundColor: 'transparent' 
   },
   demoText: {
        marginTop: 20,
        marginBottom: 12
   },
   header: {
       marginTop: 20
   }
});