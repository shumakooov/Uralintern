import React, { useContext, useState } from 'react'
import {StyleSheet, TouchableNativeFeedback, View, Button, Image, SafeAreaView, TextInput} from 'react-native'
import { useAuth } from './useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { isAuth, setIsAuth } = useAuth()

	const authHandler = async () => {
		if (email && password) {
			if (email !== 'test@mail.ru') {
				return setError('Неверный Email')
			}

			if (password !== '12345') {
				return setError('Неверный пароль')
			}

			await AsyncStorage.setItem('token', 'w23eefq234Ad')
			setIsAuth(true)
		} else {
			setError('Заполните все поля!')
		}
	}

	return (
		<SafeAreaView style={styles.back}>
			{/* {error && <Error message={error} />} */}
			{/* <Image style={styles.logo} source={require('./images/logo.png')} /> */}
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
		width: 300,
		height: 300,
		marginLeft: 45,
		marginBottom: 50,
		marginTop: 50
	},

	buttonStyle:{
		borderStyle: 'solid',
		borderRadius: 10,
		backgroundColor: '#ffcc00',
		marginTop: 35,
		width: '45%',
		marginLeft: 100
	},

	default:{
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: 2,
		borderLeftWidth: 0,
		borderTopWidth: 0,
		borderRightWidth: 0,
		margin: 10,
		padding: 10,
		width: '70%',
		color: '#ffcc00',
		fontSize: 20,
		marginLeft: 55,

	},

	back:{
		flex: 1,
		backgroundColor: '#393939',
		justifyContent: 'flex-start',

	}
});

export default AuthForm
