import React from "react";
import { View, StyleSheet } from 'react-native'
import { Button, Text } from "react-native-elements";

export default (content, navigation) => {
    let uiElements = []

    content.forEach((v, vIndex) => {
        uiElements.push(
            <Text h3 key={"h" + vIndex}>{v.title}</Text>
        )

        let buttons = []
        v.buttons.forEach((b, index) => {
            buttons.push(
                <Button
                    key={"b" + index}
                    title={b.title}
                    onPress={() => navigation.navigate(b.page)}
                    type='outline' />
            )
        })
        uiElements.push(
            <View key={"s" + vIndex} style={styles.Section}>{buttons}</View>
        )
    })

    return <View style={styles.Container}>
        {uiElements}
    </View>
}

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