import React from 'react';
import { View, Button } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Navbar = (navigation) => {
  const Stack = createStackNavigator();
    return (
    <View style={styles.container}>
        <NavigationBar style={styles.navbarstyl} title={titleConfig} rightButton={rightButtonConfig} />
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('LoginForm')}
      />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    )
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: '#576574',
    }
  };
  
  const rightButtonConfig = {
    title: 'Sign-In',
    tintColor: '#a29bfe',
    handler: () => navigation.navigate('login'),
  };
  
  const titleConfig = {
    title: 'Hello Cars',
    tintColor: '#c8d6e5',
    ellipsizeMode: 'tail'
  };



  export default Navbar;