import React from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize} from "react-native-responsive-dimensions";

import FIO from "../components/forProfileScreen/FioComponent";
import Team from "../components/forProfileScreen/TeamComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const ProfileScreen = () => {
  const[dataset, setDataset] = React.useState({});

  const getData = async() => {
    try{
      const token = await AsyncStorage.getItem('token');
      if (token != null){
        const data = await axios.get('http://studprzi.beget.tech/api/trainee/team', {headers: {Authorization: 'Token ' + token}})
        setDataset(data.data)
      }

    }catch(e){
      console.log(e.message);
    }
  }

  React.useEffect(() => {
        getData()
      },
      []);

  const media = 'http://studprzi.beget.tech/'

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
              </> : <ActivityIndicator animating={true} size="large" color="#ffcc00" />
          }
        </ScrollView>
      </View>
  )}


const styles = StyleSheet.create({

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