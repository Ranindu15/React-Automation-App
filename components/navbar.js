import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';

const Navbar = () => {
    return (
    <View style={styles.container}>
        <NavigationBar style={styles.navbarstyl} title={titleConfig} rightButton={rightButtonConfig} />
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
    handler: () => alert('hello!'),
  };
  
  const titleConfig = {
    title: 'Hello Cars',
    tintColor: '#c8d6e5',
    ellipsizeMode: 'tail'
  };



  export default Navbar;