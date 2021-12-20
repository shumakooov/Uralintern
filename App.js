import React, {useState} from 'react';
import AuthForm from "./components/forAuth/AuthForm";
import Main from "./components/Main";
import {AuthContext} from "./components/forAuth/authContext";
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
console.disableYellowBox = true;

    export default function App() {
        const [isAuth, setIsAuth] = useState(false)
        const [user, setUser] = useState({})

        const checkAuth = async() => {
            try{
                const token = await AsyncStorage.getItem('token');
                if (token != null){
                    const data = await axios.get('http://studprzi.beget.tech/api/user',
                        {headers: {Authorization: 'Token ' + token}})
                    setUser(data)
                }
            }catch(e){
                console.log(e.message);
            }
        }
        React.useEffect(() => {
                checkAuth()
                user.data ? setIsAuth(true) : setIsAuth(false)
            },
            []);
        console.log(isAuth)
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

