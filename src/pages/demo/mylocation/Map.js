import React, {Component} from 'react';
import MapView from 'react-native-maps';

export default class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFirstLoad: true,
            mapRegion: undefined,
            annotations: []
        }
    }

    getAnnotations(region) {
        return [{
            longitude: region.longitude,
            latitude: region.latitude,
            title: 'You are here!'
        }];
    }

    onRegionChangeComplete(region) {
        if (this.state.isFirstLoad) {
            this.setState({
                annotations: this.getAnnotations(region),
                isFirstLoad: false
            })
        }
    }

    render() {
        return (
            <MapView
                style={this.props.mapStyle}
                mapType={this.props.mapType}
                showsUserLocation={this.props.showsUserLocation}
                followsUserLocation={this.props.followsUserLocation}
                onRegionChangeComplete={(region) => this.onRegionChangeComplete(region)}
                region={this.state.mapRegion}
                annotations={this.state.annotations} />
        )
    }
    
}