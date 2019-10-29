import React,{ Component } from "react";
import { Text,View,StyleSheet,Image } from "react-native";


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario : {
                idUsuario : 234,
                nome : "Lucas Nogueira de Souza"
            }
        }
    }
    
    render(){
        return(
            <View style={styles.main}>
                <Text h1 style={styles.titulo}>Perfil</Text>
                <Image style={styles.fotoPerfil} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                <View style={styles.noMeio}>
                    <Text style={styles.id}># {this.state.usuario.idUsuario}</Text>
                    <Text  style={styles.nome}>{this.state.usuario.nome}</Text>
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
        marginBottom : 30
    },
    fotoPerfil:{
        height: 100,
        width: 100,
        justifyContent : "center",
        marginVertical : 10
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
        fontSize : 20
    }
})
export default Profile;