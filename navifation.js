import React from 'react';
import App from 'App';
import SignIn from 'SignIn';

import { createStackNavigator} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={App}
                options={{title: 'Профиль'}}
                />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{title: 'Вход'}}
                />
        </Stack.Navigator>
    </NavigationContainer>;
}