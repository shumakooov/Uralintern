import React, {useState} from 'react';
import AuthForm from "./components/forAuth/AuthForm";
import Main from "./components/Main";
import {AuthContext} from "./components/forAuth/authContext";
import {StyleSheet, View, Text, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
console.disableYellowBox = true;

    export default function App() {
        const [isAuth, setIsAuth] = useState(false)
        const [user, setUser] = useState({})
        const [login, setLogin] = useState(false)

        const checkAuth = async() => {
            try{
                // const token = 'asdfasdfsadgasdasdgasdfasd'
                const token = await AsyncStorage.getItem('token');
                if (token != null){
                    await axios.get('http://studprzi.beget.tech/api/user',
                        {headers: {Authorization: 'Token ' + token}})
                        .then(response => validateResponse(response))
                }
            }catch(e){
                Alert.alert("Ошибка", e.message, [
                    {text: "OK"}])            }
        }

        const errorCatch = (error) => {

        }

        const validateResponse = (response) => {
            if (response.data.user.detail){
                console.log(response.data)
                Alert.alert("Ошибка", response.data.user.detail, [
                    {text: "OK"}])
            }
            else{
                setUser(response)
                setIsAuth(true);
            }
        }

        React.useEffect(() => {
                checkAuth()
                // user.data ? setIsAuth(true) : setIsAuth(false)
            },
            []);

        return (
            <AuthContext.Provider value={{ isAuth, setIsAuth }}>
                <View style={styles.container}>
                    {!isAuth? <AuthForm /> : <Main />}
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

