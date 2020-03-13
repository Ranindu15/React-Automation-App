import React from 'react';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar';

const Navbar = (navigation) => {
    return (
    <View style={styles.container}>
        <NavigationBar style={styles.navbarstyl} title={titleConfig} 
        rightButton={rightButtonConfig} />
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