import React from 'react';
import { View, Button } from 'react-native';
import NavigationBar from 'react-native-navbar';
import  LoginForm  from './loginform';

const Navbar = () => {
    return (
    <View style={styles.container}>
      <NavigationBar style={styles.navbarstyl} title={titleConfig} rightButton={rightButtonConfig} />
      <LoginForm/>
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
    handler: () => alert('login'),
  };
  
  const titleConfig = {
    title: 'Hello Cars',
    tintColor: '#c8d6e5',
    ellipsizeMode: 'tail'
  };



  export default Navbar;