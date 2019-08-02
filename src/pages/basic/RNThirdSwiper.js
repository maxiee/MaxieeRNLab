import React from 'react'
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper'
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

const BasicDemo = () => {
    return (
        <Swiper showsButtons>
            <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
    )
}

const HomeDemo = (props) => {

    return (
        <Button onPress={() => props.navigation.push('Basic')} title="Basic" />
    )
}

const Stack = createStackNavigator({
    Home: HomeDemo,
    Basic: BasicDemo
}, {
    headerMode: "none"
});

export default Stack;