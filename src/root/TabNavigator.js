import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

// Components
import Screen1 from '../component/Screen1'
import Screen2 from '../component/Screen2'
import Screen3 from '../component/Screen3'

const TabNavigator = createBottomTabNavigator(
    {
        Home: Screen1,
        SecondScreen: Screen2,
        ThirdScreen: Screen3
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#252624',
                paddingBottom: 10,
            },
        },
    }
)

export default TabNavigator