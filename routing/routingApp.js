import React, {Component} from 'react';
import { Image, Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from '../components/BasicUiComponents/home';
import  LoginForm  from '../components/BasicUiComponents/loginform';
import Cars from '../components/CategoryUiComponents/cars';
import Jeep from '../components/CategoryUiComponents/jeep';
import Crossover from '../components/CategoryUiComponents/crossover';
import Minicooper from '../components/CategoryUiComponents/minicooper';
import Minivans from '../components/CategoryUiComponents/minivans';
import Pickup from '../components/CategoryUiComponents/pickup';
import Audi from '../components/carmodelcomponents/Audi';
import BMW,{ BMW1, BMW2} from '../components/carmodelcomponents/BMW';
import Hyundai from '../components/carmodelcomponents/Hyundai';
import Jaguar from '../components/carmodelcomponents/Jaguar';
import Kia from '../components/carmodelcomponents/Kia';
import Mazda from '../components/carmodelcomponents/Mazda';
import Benz from '../components/carmodelcomponents/Mercedes-Benz';
import Mitsubishi from '../components/carmodelcomponents/Mitsubishi';
import Nissan from '../components/carmodelcomponents/Nissan';
import Toyota from '../components/carmodelcomponents/Toyota';
import Volkswagen from '../components/carmodelcomponents/Volkswagen';
import {AudiA1, AudiA3, AudiA4} from '../components/carmodelcomponents/Audi';


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
          <Homestack.Screen name="Carpage" component={Cars} options={{title:"Search your fav Car"}}/>
          <Homestack.Screen name="Jeeppage" component={Jeep} />
          <Homestack.Screen name="Crossoverpage" component={Crossover} />
          <Homestack.Screen name="Minicooperpage" component={Minicooper} />
          <Homestack.Screen name="Minivanspage" component={Minivans} />
          <Homestack.Screen name="Pickuppage" component={Pickup} />
          <Homestack.Screen name="Audi" component={Audi} />
          <Homestack.Screen name="BMW" component={BMW} />
          <Homestack.Screen name="Hyundai" component={Hyundai} />
          <Homestack.Screen name="Jaguar" component={Jaguar} />
          <Homestack.Screen name="Kia" component={Kia} />
          <Homestack.Screen name="Mazda" component={Mazda} />
          <Homestack.Screen name="Mercedes-Benz" component={Benz} />
          <Homestack.Screen name="Mitsubishi" component={Mitsubishi} />
          <Homestack.Screen name="Nissan" component={Nissan} />
          <Homestack.Screen name="Toyota" component={Toyota} />
          <Homestack.Screen name="Volkswagen" component={Volkswagen} />
          <Homestack.Screen name="audia1" component={AudiA1} />
          <Homestack.Screen name="audia3" component={AudiA3} />
          <Homestack.Screen name="audia4" component={AudiA4} />
          <Homestack.Screen name="bmw1" component={BMW1} />
          <Homestack.Screen name="bmw2" component={BMW2} />
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

