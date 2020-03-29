import React, {Component} from 'react';
import { DrawerLayoutAndroid, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Button, Icon } from 'react-native-elements'

export default class BMW extends Component {
  render() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={()=> this.props.navigation.navigate('bmw1')} style={{margin: 10, fontSize: 15, textAlign: 'left'}}>BMW 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={()=> this.props.navigation.navigate('bmw2')} style={{margin: 10, fontSize: 15, textAlign: 'left'}}>BMW 2!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </TouchableOpacity>
    </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition='left'
        keyboardDismissMode='on-drag'
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Card
            title='HELLO WORLD'
            image={require('../../assests/batman.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>  
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
export  const BMW1=()=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card
            title='HELLO WORLD'
            image={require('../../assests/jeep.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>  
    </View>
  );
}

export  const BMW2=({ navigation })=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card
            title='HELLO WORLD'
            image={require('../../assests/vega.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>  
    </View>
  );
}