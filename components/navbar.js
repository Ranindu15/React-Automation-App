import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

const Navbar = () => {
    return (
        <View style={styles.container}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
    </View>
    )
}
const styles = {
    container: {
      flex: 1,
    },
  };
  
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
  
  const titleConfig = {
    title: 'Hello, world',
  };

  export default Navbar;