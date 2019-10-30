import React, { Component } from "react";
import { Text, View,StyleSheet,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import console = require("console");


class Main extends Component {

    static navigationOptions ={
        tabBarIcon : () =>(
            <Image source={require("../assets/img/calendar.png")} 
                style={{width : 20, height : 20, tintColor : "#FFF"}}
            />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
        }
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        await fetch("http://192.168.7.85:5000/api/eventos")
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(error => console.warn(error))
    }

    render() {
        return (
            <View style={styles.main}>
                <Text h1 style={styles.titulo}>Eventos</Text>
                <FlatList
                    style = {styles.lista}
                    data={this.state.eventos}
                    keyExtractor={item => item.idEvento.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.lancamento}>
                            <Text style={styles.tituloLancamento}>{item.titulo}</Text>
                            <Text style={styles.dataLancamento}>{item.dataEvento}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main : {
        backgroundColor : "#993599",
        minHeight : 1000
    },
    titulo : {
        padding : 20,
        textAlign : "center",
        color : "#fff",
        fontSize : 30,
        fontWeight : "bold",
    },
    lista : {
        paddingHorizontal : 10,
    },
    lancamento : {
        color : "#fff",
        marginVertical : 5,
        padding : 5,
        paddingHorizontal : 15,
        borderWidth : 2,
        borderColor : "#fff",
        borderRadius : 6,
        // flexDirection : "row",
        justifyContent : "space-between",
        // alignItems : "center"
    },
    tituloLancamento : {
        fontWeight: "900",
        fontSize : 25,
        color : "#fff",
    },
    dataLancamento : {
        color : "#fff",
        fontSize : 15,
        alignSelf : "flex-end",
    }
})

export default Main;