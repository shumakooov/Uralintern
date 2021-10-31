import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React, {Component} from 'react';
import { View, Image, StyleSheet} from 'react-native'

import EvaluationScreen from "../screens/EvaluationScreen";
import InterpreterScreen from "../screens/InterpreterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,

            }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name={'Evaluation'} component={EvaluationScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '30%'}}>
                      <Image
                        source = {require('../images/evaluation_img.png')}
                        style={{
                            tintColor: focused ? '#ffcc00' : '#000',
                            width: responsiveWidth(11),
                            height: responsiveHeight(11),
                            marginBottom: '5%'
                        }}
                      />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '23%'}}>
                        <Image
                            source = {require('../images/profile_img.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000',
                                width: responsiveWidth(11.5),
                                height: responsiveHeight(11.5),
                                marginBottom: '5%'
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Interpreter'} component={InterpreterScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '30%'}}>
                        <Image
                            source = {require('../images/interpreter_img.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000',
                                width: responsiveWidth(11),
                                height: responsiveHeight(11),
                                marginBottom: '5%'
                            }}
                        />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}


export default Tabs;
