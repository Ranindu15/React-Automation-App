import React, {Component} from 'react';
import {Picker,Button, View} from 'react-native';

export const  AudiA1=({ navigation })=> {
  return (
    <View style={{ flex: 1,paddingTop:70 ,alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()} title="Go back" 
      />
    </View>
  );
}
export  const AudiA3=({ navigation })=> {
  return (
    <View style={{ flex: 1,paddingTop:70, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()} title="Go back" 
      />
    </View>
  );
}
export  const AudiA4=({ navigation })=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()} title="Go Back"
      />
    </View>
  );
}

export default class Audi extends Component {
  render(){
    return (
    <Picker
      prompt="select one.."
      style={{width: 200, color: '#0984e3' }}
      onValueChange={(itemValue) => this.props.navigation.navigate(itemValue)}>
      <Picker.Item label="Audi A1" value="audia1" />
      <Picker.Item label="Audi A3" value="audia3" />
      <Picker.Item label="Audi A4" value="audia4" />
    </Picker>
    
    )
  }
}