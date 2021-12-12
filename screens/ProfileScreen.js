import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, ScrollView} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

import FIO from "../components/forProfileScreen/FioComponent";
import Team from "../components/forProfileScreen/TeamComponent";


const ProfileScreen = () => {

  return (
  <View style={styles.container}>
    <ScrollView>

      <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
        <Text style={styles.textTopic}>Профиль</Text>
      </SafeAreaView>

      <View style={styles.info}>
        <Image style={styles.imgStyle} source={require('../images/test_img.jpg')}/>
         <FIO></FIO>
      </View>

      <Team></Team>

    </ScrollView>
  </View>
  )}


const styles = StyleSheet.create({
  imgStyle:{
    width: responsiveWidth(28),
    height: responsiveHeight(13),
    borderRadius: 60,
    marginLeft: '7%',
  },

  info:{
    height: '27%',
    backgroundColor: '#3f3f3f',
    margin: '3%',
    borderRadius: 40,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
