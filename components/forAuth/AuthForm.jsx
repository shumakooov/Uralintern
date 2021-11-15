import React, { useContext, useState } from 'react'
import {StyleSheet, TouchableNativeFeedback, View, Button, Image, SafeAreaView, TextInput, Alert} from 'react-native'
import { useAuth } from './useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {responsiveFontSize} from "react-native-responsive-dimensions";

const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { isAuth, setIsAuth } = useAuth()

	async function req() {
		let url = 'http://sharosuc.beget.tech/api/user/login';
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
	}

	const authHandler = async () => {
		let a = await req();
		if (a.user.email !== '') {

			await AsyncStorage.setItem('token', a.user.token)
			setIsAuth(true)
		} else {
			Alert.alert("Ошибка", "Введены неверные данные", [
				{ text: "OK"},
			])
		}
	}

	return (
		<SafeAreaView style={styles.back}>
			{/* {error && <Error message={error} />} */}
			<Image style={styles.logo} source={require('../../images/logo.png')} />
			<View>
				<TextInput style={styles.default} value={email} onChangeText={setEmail} placeholder='Email..'
						   placeholderTextColor="#c2a947" keyboardType="email-address"/>
			</View>
			<View>
				<TextInput style={styles.default} value={password} onChangeText={setPassword} placeholder='Password..'
						   placeholderTextColor="#c2a947" secureTextEntry={true}/>
			</View>
			<View style={styles.buttonStyle}>
				<TouchableNativeFeedback>
					<Button
						onPress={authHandler}
						title="Войти"
						color='white'
						backgroundColor='red'
					/>
				</TouchableNativeFeedback>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	logo:{
		flex: 0.4,
		width: '76%',
		height: '76%',
		marginLeft: '12%',
		marginBottom: '13%',
		marginTop: '13%'
	},

	buttonStyle:{
		borderStyle: 'solid',
		borderRadius: 10,
		backgroundColor: '#ffcc00',
		width: '45%',
		marginTop: '9%',
		marginLeft: '27%'
	},

	default:{
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

	back:{
		flex: 1,
		backgroundColor: '#393939',
		justifyContent: 'flex-start',

	}
});

export default AuthForm
