import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    }
  }
  render (){
        return (
            <View style={Styles.container}>
                <TextInput style = {Styles.inputText} placeholder="Email" 
                    onChangeText={text => this.setState({email: text})}>
                </TextInput>
                <TextInput secureTextEntry={true} style = {Styles.inputText} placeholder="Password" 
                    onChangeText={text => this.setState({password: text})}>
                </TextInput>
                <TouchableOpacity>
                    <Text style={Styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.loginBtn} disabled={!this.state.email || !this.state.password}>
                    <Text style={Styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
  }
} 

const Styles = {
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText: {
        height:50,
        color:"white"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
}