/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './src/pages/home';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import store from './src/config/store';

class ConnectedApp extends React.Component {
    render() {
        return <Provider store={store}>
            <App/>
        </Provider>
    }
}

AppRegistry.registerComponent(appName, () => ConnectedApp);
