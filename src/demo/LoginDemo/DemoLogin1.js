import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import GradientButton from '../ReactNativeUIDemo/buttons/GradientButton';

export default () => <View style={styles.container}>
    <View style={styles.buttons}>
        <Icon name='logo-twitter' size={36} style={styles.button} />
        <Icon name='logo-github' size={36} style={styles.button} />
        <Icon name='logo-google' size={36} style={styles.button} />
    </View>
    <TextInput mode="outlined" label="username" style={{height: 60, width: 200, marginBottom: 12}} />
    <TextInput mode="outlined" label="password" style={{height: 60, width: 200, marginBottom: 12}} />
    <GradientButton text="Login" style={{ width: 200 }} />
</View>

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingBottom: 22,
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: 24,
        marginTop: 200
    },
    button: {
        marginHorizontal: 14,
    },
})
