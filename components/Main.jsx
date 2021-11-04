import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "../navigation/AppNavigation";


export default function Main() {
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}