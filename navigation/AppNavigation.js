// Навигация между экранами, расположенная внизу
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react';
import {View, Image, StyleSheet, Text, Platform} from 'react-native'
import EvaluationScreen from "../screens/EvaluationScreen";
import InterpreterScreen from "../screens/InterpreterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import 'react-native-gesture-handler'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {display: "flex", height: responsiveHeight(10)},
                    null
                ],
                tabBarOptions: [{showLabel: false}]
            }}
            initialRouteName="Profile"
        >
            <Tab.Screen name={'Evaluation'} component={EvaluationScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '20%'}}>
                      <Image
                        source = {require('../images/interpreter_img.png')}
                        style={{
                            tintColor: focused ? '#ffcc00' : '#000',
                            width: responsiveWidth(11),
                            height: responsiveHeight(11),
                            marginBottom: '5%'
                        }}
                      />
                      <Text style={styles.footerText}>Оценка</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '15%'}}>
                        <Image
                            source = {require('../images/profile_img.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000',
                                width: responsiveWidth(11.5),
                                height: responsiveHeight(11.5),
                                marginBottom: '5%',
                            }}
                        />
                        <Text style={styles.footerText}>Профиль</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name={'Interpreter'} component={InterpreterScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{top: '20%'}}>
                        <Image
                            source = {require('../images/evaluation_img.png')}
                            style={{
                                tintColor: focused ? '#ffcc00' : '#000',
                                width: responsiveWidth(11),
                                height: responsiveHeight(11),
                                marginBottom: '5%',
                            }}
                        />
                        <Text style={styles.footerText}>Отчет</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    footerText: {
        color: '#000',
        fontSize: responsiveFontSize(1.5),
        top: -38,
        textAlign: 'center'

    }
})

export default Tabs;
