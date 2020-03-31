import React from 'react'
import { Text, View, ScrollView, StyleSheet, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import { createStackNavigator } from '@react-navigation/stack';
import GridView from '../../widgets/gridview/GridView';
import Icon from 'react-native-vector-icons/Ionicons';

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
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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

const VerticalDemo = () => {
    return (
        <Swiper horizontal={false} autoplay>
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

const ImageDemo = () => {
    return (
        <View style={{height: 240}}>
            <Swiper height={240}
                dot={
                    <View style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        margin: 3
                    }} />
                }
                activeDot={
                    <View style={{
                        backgroundColor: '#000',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        margin: 3
                    }} />
                }
                paginationStyle={{
                    bottom: -23,
                    left: null,
                    right: 10
                }}>
                <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/Swiper1.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/Swiper2.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/Swiper3.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('./img/Swiper4.jpg')} />
                </View>
            </Swiper>
        </View>
    )
}

const HomeDemo = (props) => {
    let infos = [
        {
            title: "Basic",
            subtitle: "",
            icon: <Icon name="ios-albums" size={40} color="#999999" />,
            onPress: () => props.navigation.push('Basic')
        },
        {
            title: "Vertical",
            subtitle: "autoplay",
            icon: <Icon name="ios-menu" size={40} color="#999999" />,
            onPress: () => props.navigation.push('Vertical')
        },
        {
            title: "Image",
            subtitle: "",
            icon: <Icon name="ios-photos" size={40} color="#999999" />,
            onPress: () => props.navigation.push('Image')
        },
    ];

    return (
        <ScrollView>
            <GridView
                infos={infos}
                onGridSelected={(index) => infos[index].onPress()}/>
        </ScrollView>
    )
}

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeDemo} />
            <Stack.Screen
                name="Basic"
                component={BasicDemo} />
            <Stack.Screen
                name="Vertical"
                component={VerticalDemo} />
            <Stack.Screen
                name="Image"
                component={ImageDemo} />
        </Stack.Navigator>
    )
}

// const Stack = createStackNavigator({
//     Home: HomeDemo,
//     Basic: BasicDemo,
//     Vertical: VerticalDemo,
//     Image: ImageDemo
// }, {
//     headerMode: "none"
// });

// export default Stack;