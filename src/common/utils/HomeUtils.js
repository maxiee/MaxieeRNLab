import React from 'react';
import { Text } from 'react-native-elements';

export function createHeader(title) {
    return <Text h4 key={title} style={{
        margin: 10
    }}>{title}</Text>
}