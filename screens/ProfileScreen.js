import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableNativeFeedback,
  Button
} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import FIO from "../components/forProfileScreen/FioComponent";
import Team from "../components/forProfileScreen/TeamComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {useAuth} from "../components/forAuth/useAuth";

const ProfileScreen = ({navigation}) => {
  const media = 'http://studprzi.beget.tech/'
  const[dataset, setDataset] = React.useState({});
  const { isAuth, setIsAuth } = useAuth()

  const getData = async() => {
    try{
      const token = await AsyncStorage.getItem('token');
      if (token != null){
        const data = await axios.get(media + 'api/trainee/team', {headers: {Authorization: 'Token ' + token}})
        setDataset(data.data)
      }
    }catch(e){
      Alert.alert("Ошибка", e.message, [
        {text: "OK"}])    }
  }

  React.useEffect(() => {
        getData()
      },
      []);

  async function Exit () {
    await AsyncStorage.removeItem('token').then(() => {
      setIsAuth(false)
      navigation.replace('Auth')
    });
  }

  return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
            <Text style={styles.textTopic}>Профиль</Text>
          </SafeAreaView>
          { dataset.trainee && dataset.team ?
              <>
            <FIO trainee = {dataset.trainee} mediaImg = {media}/>
            <Team team = {dataset.team} mediaImg = {media}/>
                <View style={styles.buttonStyle}>
                  <TouchableNativeFeedback>
                    <Button
                        title='Выйти'
                        color='#ffcc00'
                        onPress={
                            Exit
                        }/>
                  </TouchableNativeFeedback>
                </View>
              </> :
              <View style={styles.noInfo}>
                <ActivityIndicator animating={true} size="large" color="#ffcc00" />
              </View>
          }
        </ScrollView>
      </View>
  )}

const styles = StyleSheet.create({
  buttonStyle:{
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#393939',
    marginTop: '2%',
    width: '60%',
    borderColor: '#ffcc00',
    marginBottom:130,
    marginHorizontal: '20%'
  },
  noInfo: {
    marginTop: '20%'
  },
  container:{
    flex: 1,
    backgroundColor: '#393939'
  },
  textTopic:{
    textAlign: 'center',
    color: '#ffcc00',
    fontSize: responsiveFontSize(3),
    margin: '2%',
    fontWeight: 'bold'
  }
});

export default ProfileScreen
