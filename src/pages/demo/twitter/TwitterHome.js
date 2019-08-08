import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';
import TwitterPost from './TwitterPost';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);


export default class TwitterHome extends Component {
    render() {
        return (
            <TwitterPost />
        )
    }
}
