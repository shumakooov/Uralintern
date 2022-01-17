// Форма авторизации
import React, {useState } from 'react'
import {
	StyleSheet,
	TouchableNativeFeedback,
	View,
	Image,
	SafeAreaView,
	TextInput,
	Alert,
	ActivityIndicator, TouchableOpacity, Text
} from 'react-native'
import { useAuth } from './useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {responsiveFontSize} from "react-native-responsive-dimensions";

// Получает навигатор как props для выхода из аккаунта
const AuthForm = ({navigation}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { isAuth, setIsAuth } = useAuth()

	React.useEffect(() => {
		if (isAuth)
			navigation.replace('Main')
	})

	// Проверяет почту и пароль на сервере, возвращает ответ от сервера в формате .json
	async function req() {
		try {
			let url = 'http://studprzi.beget.tech/api/user/login';
			let res = await fetch(url, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user: {
						email: email,
						password: password
					}
				})
			});
			return await res.json()
		}catch(e){
			Alert.alert("Ошибка", e.message, [
				{text: "OK"}])    }
	}

	// Сохраняет токен в случае удачной попытки входа и перенаправляет на экран main
	const authHandler = async () => {
		let a = await req();
		try {
			await AsyncStorage.setItem('token', a.user.token).then(() => {
				setIsAuth(true)
				navigation.replace('Main')})
		} catch (e) {
			Alert.alert("Ошибка", "Введены неверные данные", [
				{text: "OK"},
			])
		}
	}

	// Возвращает саму форму входа
	const [loaded, setLoaded] = useState(false);
	return (
		<SafeAreaView style={styles.back}>
			{loaded ? null :
				<>
				<View style={styles.noImg}>
					<ActivityIndicator animating={true} size="large" color="#ffcc00" />
				</View>
				</> }
			<Image style={styles.logo} source={require('../../images/logo.png')}  onLoad={() => setLoaded(true)} />
			<View>
				<TextInput style={styles.default} value={email} onChangeText={setEmail} placeholder='Email..'
						   placeholderTextColor="#c2a947" keyboardType="email-address"/>
			</View>
			<View>
				<TextInput style={styles.default} value={password} onChangeText={setPassword} placeholder='Password..'
						   placeholderTextColor="#c2a947" secureTextEntry={true}/>
			</View>

				<TouchableNativeFeedback>
					<TouchableOpacity style={styles.buttonStyle} onPress={() => {authHandler()}}>
						<Text style={styles.buttonText}>Войти</Text>
					</TouchableOpacity>
				</TouchableNativeFeedback>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	default: {
		borderStyle: 'solid',
		borderColor: 'white',
		borderBottomWidth: 2,
		margin: '2%',
		padding: '2%',
		width: '70%',
		color: '#ffcc00',
		fontSize: responsiveFontSize(2.2),
		marginLeft: '15%',
	},

	noImg: {
		marginTop: '20%'
	},
	logo:{
		flex: 0.4,
		width: '76%',
		height: '76%',
		marginLeft: '12%',
		marginBottom: '13%',
		marginTop:'13%',

	},

	buttonText: {
		color: 'white',
		fontSize: responsiveFontSize(2.4),
	},

	buttonStyle:{
		borderStyle: 'solid',
		borderRadius: 6,
		backgroundColor: '#ffcc00',
		justifyContent: "center",
		alignItems: "center",
		width: '45%',
		minHeight: 40,
		height: '5%',
		marginTop: '9%',
		marginLeft: '27%'
	},

	back:{
		flex: 1,
		backgroundColor: '#393939',
		justifyContent: 'flex-start',
	}
});

export default AuthForm
