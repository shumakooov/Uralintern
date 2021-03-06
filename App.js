import React, {useState} from 'react';
import Main from "./components/Main";
import {AuthContext} from "./components/forAuth/authContext";
import {StyleSheet, View, Text, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
console.disableYellowBox = true; // Скрыли варнинги, связанные с выпадающим списком!

export default function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})

    // Проверяет авторизован ли пользователь
    const checkAuth = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                await axios.get('http://studprzi.beget.tech/api/user',
                    {headers: {Authorization: 'Token ' + token}})
                    .then(response => {
                        setUser(response)
                        setIsAuth(true);
                    }).catch(e => handleError(e))
            }
        }catch(e){
            Alert.alert("Ошибка", e.message, [
                {text: "OK"}])            }
    }

    // Обрабатывает ошибки сервера
    const handleError = (e) => {
        if (e.response.status < 500 && e.response.status > 400)
            Alert.alert("Ошибка", "Страницы не существует", [
                {text: "Выйти",  onPress: () => {AsyncStorage.removeItem('token')}}])
        else if (e.response.status === 403 && e.response.data.user.detail)
            Alert.alert("Ошибка", e.response.data.user.detail, [
                {text: "Выйти",  onPress: () => AsyncStorage.removeItem('token')}])
        else
            Alert.alert("Ошибка", e.message,[{text: "Выйти",  onPress: () => {AsyncStorage.removeItem('token')}}])
    }

    React.useEffect(() => {
            checkAuth()
        },
        []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <View style={styles.container}>
                <Main />
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

