import React, {useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView} from 'react-native';
import AppNavigation from "./navigation/AppNavigation";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/AppNavigation";


export default function App() {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});
