import React, {useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, ScrollView} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";


const ProfileScreen = () => (
  <View style={styles.container}>
    <ScrollView>
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <Text style={styles.textTopic}>Профиль</Text>
      </SafeAreaView>
        <View style={styles.info}>
          <Image style={styles.imgStyle} source={require('../images/test_img.jpg')} />
          <View style={styles.fioStyle}>
            <View style={styles.underline}>
              <Text style={styles.textFioStyle}>Фамилия</Text>
            </View>
            <View style={styles.underline}>
                <Text style={styles.textFioStyle}>Имя</Text>
            </View>
            <View style={styles.underline}>
                <Text style={styles.textFioStyle}>Отчество</Text>
            </View>
          </View>
        </View>
        <View style={styles.teamStyle}>
          <Text style={styles.textTeam}>Ваша команда №1</Text>
          <View style={styles.team}>
            <Image style={styles.imgStyleTeam} source={require('../images/test_img1.jpeg')} />
            <Text style={styles.textTeamFio}>Обабков Илья</Text>
            <Text style={styles.textTeamRole}>Дизайнер</Text>
          </View>
          <View style={styles.team}>
            <Image style={styles.imgStyleTeam} source={require('../images/test_img2.png')} />
            <Text style={styles.textTeamFio}>Шадрин Денис</Text>
            <Text style={styles.textTeamRole}>Тимлид</Text>
          </View>
          <View style={styles.team}>
            <Image style={styles.imgStyleTeam} source={require('../images/test_img3.jpg')} />
            <Text style={styles.textTeamFio}>Степаненко Андрей</Text>
            <Text style={styles.textTeamRole}>Программист</Text>
          </View>
          <View style={styles.team}>
            <Image style={styles.imgStyleTeam} source={require('../images/test_img4.jpg')} />
            <Text style={styles.textTeamFio}>Ботов Михаил</Text>
            <Text style={styles.textTeamRole}>Программист</Text>
          </View>
          <View style={styles.team}>
            <Image style={styles.imgStyleTeam} source={require('../images/test_img4.jpg')} />
            <Text style={styles.textTeamFio}>Кох Елена</Text>
            <Text style={styles.textTeamRole}>Аналитик</Text>
          </View>
        </View>
        </ScrollView>
  </View>
)


const styles = StyleSheet.create({
  underline: {
    borderStyle: "solid",
    borderColor: '#ffcc00',
    borderBottomWidth: 1.5,
    width: '135%',
  },

  team:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '7%',
    marginLeft: '6%'
  },

  imgStyleTeam:{
    width: responsiveWidth(11),
    height: responsiveHeight(5),
    borderRadius: 25,

  },
  textTeamFio:{
    flexBasis: '50%',
    color: 'white',
    fontSize: responsiveFontSize(2.1),
    marginLeft: '3%',
    paddingRight: '3%'
  },
  textTeamRole:{
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    flexBasis: '30%',
    paddingRight: '1%'
  },

  textTeam:{
    textAlign: 'center',
    color: '#ffcc00',
    fontSize: responsiveFontSize(2.7),
    marginTop: '7%',
    marginBottom: '12%'
  },

  teamStyle:{
    flex: 0.7,
    margin: '3%',
    backgroundColor: '#3f3f3f',
    borderRadius: 40,
    justifyContent: 'space-between'
  },

  textFioStyle:{
    color: 'white',
    fontSize: responsiveFontSize(2.6),
    margin: '2%',
    textDecorationColor: '#ffcc00',
    textAlign: 'center'
  },

  fioStyle:{
    marginRight: '15%',
    alignItems: 'center'
  },

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
