import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) => {
    return (
    <View style={styles.headerstyl}>
      <Text style={styles.textstyl}>{title}</Text>
    </View>
    );
}

Header.defaultProps = {
    title: 'Best Car',
}

const styles = StyleSheet.create({
    headerstyl: {
      height: 60,
      padding: 15,
      backgroundColor: 'lightblue',
    },
    textstyl: {
      fontSize: 50,
      paddingLeft: 50, 
      color: 'powderblue'
    },
  })

export default Header;