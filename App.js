import React, {useState} from 'react';
import AuthForm from "./components/forAuth/AuthForm";
import Main from "./components/Main";
import {AuthContext} from "./components/forAuth/authContext";
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

    export default function App() {
        const [isAuth, setIsAuth] = useState(false)

        // async function getToken() {
        //     let url = 'http://sharosuc.beget.tech/api/user';
        //     let res = await fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Token ' + await AsyncStorage.getItem('token')
        //         },
        //     });
        //     return await res.json()
        // }

        // let thereToken = getToken();
        // if (thereToken.user.email !== '') {
        //     return setIsAuth(true)
        // } else {
        //     return setIsAuth(false)
        // }

        return (
            <AuthContext.Provider value={{ isAuth, setIsAuth }}>
                <View style={styles.container}>
                    {!isAuth ? <AuthForm /> : <Main />}
                </View>
            </AuthContext.Provider>
        )
    }

const styles = StyleSheet.create({
    container: {
        paddingTop: '13%',
        backgroundColor: '#393939',
        height: '100%',
    },
})

