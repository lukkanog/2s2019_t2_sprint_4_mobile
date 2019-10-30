import React,{Component} from "react";

import {Text,View,TextInput,TouchableOpacity, AsyncStorage} from "react-native";
// import { TextInput } from "react-native-gesture-handler";

class Signin extends Component{
    
    static navigationOptions ={
        header : null,
    }

    constructor(){
        super();
        this.state = {
            email : "admin@admin.com",
            senha : "123456",
        }
    }

    _realizarLogin = async () =>{
        await fetch("http://192.168.7.85:5000/api/login",{
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-type" : "application/json",
            },
            body : JSON.stringify({
                email : this.state.email,
                senha : this.state.senha,
            })
        })
        .then(resposta => resposta.json())
        .then(data => this._irParaHome(data.token))
        .catch(error => console.warn("fudeu mané " + error))
    }

    _irParaHome = async(tokenRecebido) =>{
        if (tokenRecebido != null){
            try {
                await AsyncStorage.setItem("@gufos:token",tokenRecebido);
                this.props.navigation.navigate("MainNavigator");
            } catch (error) {
                
            }
        }
    }
    
    render(){
        return(
            <View>
                <TextInput placeholder="Email"
                    onChangeText={email => this.setState({email})}
                />
                <TextInput placeholder="Senha"
                    // secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Signin;