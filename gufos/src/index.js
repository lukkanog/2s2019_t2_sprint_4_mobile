import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainScreen from "./pages/main";
import ProfileScreen from "./pages/profile";
import SigninScreen from "./pages/signin";
import { createStackNavigator } from "react-navigation-stack";
// import {Icon} from "react-native";
// // import Icon from "react-native";

const AuthStack = createStackNavigator({
    Sign: {
        screen: SigninScreen,
    }
});


const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },{
        tabBarOptions : {
            activeTintColor : "#FFF",
            inactiveTintColor : "#FFF",
            activeBackgroundColor : "#9900e6",
            inactiveBackgroundColor : "#993399",
            style : {
                border : "none",
            }
        }
    }
);

export default createAppContainer(createSwitchNavigator({
    MainNavigator,
    AuthStack,
}, {
    initialRouteName: "AuthStack",
}
));