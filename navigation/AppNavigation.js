import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React, {Component} from 'react';
import { View, Image, StyleSheet} from 'react-native'

import EvaluationScreen from "../screens/EvaluationScreen";
import InterpreterScreen from "../screens/InterpreterScreen";
import ProfileScreen from "../screens/ProfileScreen";

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
                    <View style={{top: 10}}>
                      <Image
                        source = {require('../images/test_img5.png')}
                        style={{
                            tintColor: focused ? '#ffcc00' : '#000'
                        }}
                      />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: 10}}>
                        <Image
                            source = {require('../images/test_img6.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000'
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Interpreter'} component={InterpreterScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: 10}}>
                        <Image
                            source = {require('../images/test_img7.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000'
                            }}
                        />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}


export default Tabs;
