import  React, { Component }  from 'react';
import { Text } from 'react-native';
import { Card,  Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CardApp extends Component {
    render() {
        return (
            <Card
                title='Bruce Wyne'
                image={require('../assests/batman.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements 
                    is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name="rocket" size={30} color='yellow' />}
                    buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        )
    }
}
