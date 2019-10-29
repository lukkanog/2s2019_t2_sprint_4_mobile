import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import MainScreen from "./pages/main";
import ProfileScreen from "./pages/profile";
// import Appscreen from "../App";

const MainNavigator = createBottomTabNavigator({
    Main:{
        screen : MainScreen,
    },
    Profile:{
        screen : ProfileScreen,
    },
    // App:{
    //     screen : Appscreen
    // }
});

export default createAppContainer(MainNavigator);