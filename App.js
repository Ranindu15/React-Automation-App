import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header';
import Navbar from './components/navbar';

const App = () => {
  return (

    <Navbar/>
    // <View style={styles.container}>

    //   <Header/>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10,
  },
})


export default App;