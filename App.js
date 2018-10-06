import React, { Component } from 'react';
import RootStack from './src/root/NavigationRoot'
import TabNavigator from './src/root/TabNavigator'


export default class App extends Component {
    render() {
        return <TabNavigator />
    }
}
