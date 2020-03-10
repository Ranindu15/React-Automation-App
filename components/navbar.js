import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';

const Navbar = () => {
    return (
    <View style={styles.container}>
        <NavigationBar title={titleConfig} rightButton={rightButtonConfig} />
    </View>
    )
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: '#ff9900',
    },
  };
  
  const rightButtonConfig = {
    title: 'Sign-In',
    handler: () => alert('hello!'),
  };
  
  const titleConfig = {
    title: 'Hello Cars',
  };


  export default Navbar;