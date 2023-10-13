import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../screens/Home'
import Account from '../screens/Account'
import Favorites from '../screens/Favorites'
import { Image } from 'react-native'

export default function Navigation() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen  name='Favorite' component={Favorites} options={{
            tabBarLabel: 'Favoritos',
            title: 'Favoritos',
            tabBarIcon: ({color, size}) => (
                <Icon name='heart' color={color} size={size} />
            )
        }}/>
        <Tab.Screen  name='Home' component={Home} options={{
            tabBarLabel: '',
            title: 'Inicio',
            tabBarIcon: () => renderCNC()
        }} />
        <Tab.Screen  name='Account' component={Account} options={{
            tabBarLabel: 'Mi cuenta',
            title: 'Mi cuenta',
            tabBarIcon: ({color, size}) => (
                <Icon name='user' color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
  )
}

const renderCNC = () => {
    return(
        <Image
        source={require('../assets/logo.png')}
        style={{width: 200, height: 200, top: -30}}
        />
    )
}