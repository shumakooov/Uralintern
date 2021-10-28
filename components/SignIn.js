import React, {useState} from 'react';
import { StyleSheet, View, Image, SafeAreaView, TextInput, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
 
 
export default function SignIn() {
  return(
      <SafeAreaView style={styles.back}>
        <Image style={styles.logo} source={require('./images/logo.png')} />
        <View>
          <TextInput placeholderTextColor="#c2a947"  style={styles.default} placeholder="Логин" keyboardType="email-address" />
        </View>
        <View>
          <TextInput placeholderTextColor="#c2a947" style={styles.default} placeholder="Пароль" secureTextEntry={true}  />
        </View>
        <View style={styles.buttonStyle}>
          <TouchableNativeFeedback>
            <Button 
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