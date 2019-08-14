import React, {Component} from 'react';
import MapView from 'react-native-maps';
import Map from './Map';
import screen from '../../../common/screen';
import { TouchableHighlight, Text, View } from 'react-native';

export default class MyLocationHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGeo: false
        }
    }

    getLocation() {
        this.setState({
            showGeo: true
        })
    }
    
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1
            }}>
                <Map 
                    mapType="standard"
                    mapStyle={{
                        width: screen.width,
                        height: screen.height - 200
                    }}
                    showsUserLocation={this.state.showGeo}
                    followsUserLocation={this.state.showGeo} />
                <TouchableHighlight 
                    underlayColor="#00bd03"
                    style={{
                        backgroundColor:"#00a803",
                        width: screen.width,
                        height: 40,
                        borderWidth: screen.onePixel,
                        borderColor: "#009302",
                        borderRadius: 4,
                        justifyContent:"center",
                        marginTop: 10
                    }}
                    onPress={() => this.getLocation()} >
                        <Text style={{
                            textAlign:"center",
                            fontSize:18,
                            color:"#fff"
                        }}>Find my location</Text>
                </TouchableHighlight>
            </View>
        )
    }
}