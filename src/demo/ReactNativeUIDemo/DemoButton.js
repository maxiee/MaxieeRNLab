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
        <View style={{ margin: 10, flex: 1, flexDirection: 'column' }}>
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
            {createDemo(
                "RN TouchableOpacity Border",
                <LinearGradient
                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center' }}
                >
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonTextBorder}>
                            Button
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            )}
        </View>
    )
} 

const styles = StyleSheet.create({
    LinearGradientStyle: {
        height: 48,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color : '#fff',
        backgroundColor: 'transparent' 
   },
    buttonContainer: {
        width: 200,
        alignItems: 'center',
    },
    buttonTextBorder: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 198,
        height: 46,
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: 'white'
    },
    demoText: {
        marginTop: 20,
        marginBottom: 12
    },
    header: {
        marginTop: 20
    }
});