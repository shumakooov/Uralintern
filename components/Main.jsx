import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "../navigation/AppNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import AuthForm from "./forAuth/AuthForm";
import {useAuth} from "./forAuth/useAuth";
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function Main() {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Main' component={Tabs}/>
                <Stack.Screen name='Auth' component={AuthForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}