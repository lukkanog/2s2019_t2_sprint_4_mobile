import React,{ Component } from "react";
import { Text,View,StyleSheet,Image, AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";

class Profile extends Component{
    
    static navigationOptions ={
        tabBarIcon : () =>(
            <Image source={require("../assets/img/profile.png")} 
                style={{width : 20, height : 20,}}
            />
        )
    }
    
    constructor(props){
        super(props);
        this.state = {
            token : null,
            email : null,
        }
    }

    componentDidMount(){
        this._buscarDadosDoStorage();
    }

    _buscarDadosDoStorage = async() =>{
        try {
            const tokenDoStorage = await AsyncStorage.getItem("@gufos:token");
            
            if (tokenDoStorage != null){
                this.setState({token : tokenDoStorage});

                // SE NAO IMPORTAR USA ISSO:
                // var jwtDecode = require('jwt-decode');
                //SE IMPORTAR N PRECISA


                var user = jwtDecode(tokenDoStorage);
                this.setState({email : user.email})
            }
        } catch (error) {
            
        }        
    }
    
    render(){
        return(
            <View style={styles.main}>
                <Text h1 style={styles.titulo}>Perfil</Text>
                <Image style={styles.fotoPerfil} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                <View style={styles.noMeio}>
                    <Text>Email: {this.state.email}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        padding : 10,
        height : 10000,
        alignItems : "center",
    },
    titulo:{
        fontWeight: "bold",
        fontSize: 30,
        textAlign : "center",
        color : "#fff",
        backgroundColor : "#993399",
        width: "100%",
        marginBottom : 30,
    },
    fotoPerfil:{
        height: 100,
        width: 100,
        justifyContent : "center",
        marginVertical : 10,
    },
    noMeio:{
        alignItems : "flex-start",
        alignSelf: "center",
    },
    nome:{
        fontSize : 20,
        fontWeight : "bold",
    },
    id:{
        fontSize : 20,
    }
})
export default Profile;