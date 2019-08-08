import React, {Component} from 'react';
import { ScrollView, RefreshControl, Image } from 'react-native';
import screen from '../../../common/screen';

export default class TwitterPost extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isRefreshing: false
        }
    }

    onRefresh() {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
        }, 1000);
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this.onRefresh()}
                        tintColor="#ddd" />
                }>
                    <Image 
                        source={require("./img/day3.png")}
                        style={{
                            width: screen.width,
                            height: screen.height - 110
                        }} />
            </ScrollView>
        )
    }
    
}