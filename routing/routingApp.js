import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from '../components/home';
import  LoginForm  from '../components/loginform';

const Homestack = createStackNavigator();
function RotingApp() {
    return (
        <NavigationContainer>
            <Homestack.Navigator>
                <Homestack.Screen name="Home" component={Home}/>
                <Homestack.Screen name="Loginpage" component={LoginForm}/>
            </Homestack.Navigator>
        </NavigationContainer>
    )
}

export default RotingApp;