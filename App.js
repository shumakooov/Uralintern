import React, {useState} from 'react';
import AuthForm from "./components/forAuth/AuthForm";
import Main from "./components/Main";
import {AuthContext} from "./components/forAuth/authContext";
import {StyleSheet, View, Text} from 'react-native';


    export default function App() {
        const [isAuth, setIsAuth] = useState(false)

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

