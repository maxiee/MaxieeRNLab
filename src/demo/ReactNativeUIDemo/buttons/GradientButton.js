import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({text, style, ...props}) => <TouchableOpacity 
    style={style}
    {...props} >
    <LinearGradient
        style={styles.LinearGradientStyle}
        colors={['#ff9147', '#ff524c']}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <Text style={styles.buttonText}>{ text }</Text>
    </LinearGradient>
</TouchableOpacity>

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
});