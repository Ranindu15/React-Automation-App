import  React, { Component }   from 'react';
import { View, Text, Button } from 'react-native';

export default function Home ({navigation}){
        return(
            <View>
                <Text>This is Home Page</Text>
                <Button title="press" 
                    onPress={() => navigation.push('Loginpage')}
                    />
            </View>
        )
}