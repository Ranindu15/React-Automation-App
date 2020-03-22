import React, {Component} from 'react';
import { Image, Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from '../components/home';
import  LoginForm  from '../components/loginform';
import Model from '../components/model';

const Homestack = createStackNavigator();

export default class RotingApp extends Component {
  render(){
    return (
      <NavigationContainer>
        <Homestack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#8395a7'}}}>
          <Homestack.Screen name="Home" component={Home} options={({navigation}) => ({
                    title:"ඩෑෂ්-𝕭𝖔𝖆𝖗𝖉",
                    headerTitleAlign: 'center',
                    headerLeft: props => <LogoTitle {...props}/>,
                    headerRight: () => (
                      <Button
                        onPress={() => navigation.navigate('Loginpage')}
                        title="Sign-In" color="#54a0ff"
                      />  
                     )
                    })}/>
          <Homestack.Screen name="Loginpage" component={LoginForm} options={{
            title:"Transformers",
            headerTitleAlign:'center',
          }}/>
          <Homestack.Screen name="modelpage" component={Model} />
        </Homestack.Navigator>
      </NavigationContainer>
  )
  }
}

function LogoTitle() {
    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../assests/logo1.jpg')}
        />
      </View>
    );
  }

