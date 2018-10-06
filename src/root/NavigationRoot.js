import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Screen1 from '../component/Screen1'
import Screen2 from '../component/Screen2'

const RootStack = createStackNavigator({
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
})

export default RootStack