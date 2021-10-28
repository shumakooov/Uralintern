import React, {useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, ScrollView} from 'react-native';
 
 
export default function Profile() {
  return(
    <View style={styles.container}>
      <ScrollView>
      <SafeAreaView>
        <Text style={styles.textTopic}>Профиль</Text>
        </SafeAreaView>
          <View style={styles.info}>
            <Image style={styles.imgStyle} source={require('./images/test_img.jpg')} />
            <View style={styles.fioStyle}>
              <Text style={styles.textFioStyle}>Фамилия</Text>
              <Text style={styles.textFioStyle}>Имя</Text>
              <Text style={styles.textFioStyle}>Отчество</Text>
            </View>
          </View>
          <View style={styles.teamStyle}>
            <Text style={styles.textTeam}>Ваша команда №1</Text>
            <View style={styles.team}>
              <Image style={styles.imgStyleTeam} source={require('./images/test_img1.jpeg')} />
              <Text style={styles.textTeamFio}>Обабков Илья</Text>
              <Text style={styles.textTeamRole}>Роль1</Text>
            </View>
            <View style={styles.team}>
              <Image style={styles.imgStyleTeam} source={require('./images/test_img2.png')} />
              <Text style={styles.textTeamFio}>Шадрин Денис</Text>
              <Text style={styles.textTeamRole}>Роль2</Text>
            </View>
            <View style={styles.team}>
              <Image style={styles.imgStyleTeam} source={require('./images/test_img3.jpg')} />
              <Text style={styles.textTeamFio}>Степаненко Андрей</Text>
              <Text style={styles.textTeamRole}>Роль3</Text>
            </View>
            <View style={styles.team}>
              <Image style={styles.imgStyleTeam} source={require('./images/test_img4.jpg')} />
              <Text style={styles.textTeamFio}>Ботов Михаил</Text>
              <Text style={styles.textTeamRole}>Роль4</Text>
            </View>
          </View>
          </ScrollView>
          <View style={styles.footerStyle}>
            <Image style={styles.imgFooter} source={require('./images/test_img5.png')} />
            <Image style={styles.imgFooter} source={require('./images/test_img6.png')} />
            <Image style={styles.imgFooter} source={require('./images/test_img7.png')} />
          </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  imgFooter: {
    width:30,
    height:30,
    marginLeft:50,
    marginRight:50,
  },

  footerStyle:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#ffffff',
    alignItems:'center'
  },
  team:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:30,

  },

  imgStyleTeam:{
    width: 70,
    height: 75,
    borderRadius: 35,
    marginLeft: 10,
    flexBasis: '20%'
  },
  textTeamFio:{
    flexBasis: '50%',
    color: 'white',
    fontSize: 17,
    marginLeft: 20,
  },
  textTeamRole:{
    color: 'white',
    fontSize: 17,
    flexBasis: '30%',
    
  },

  textTeam:{
    textAlign: 'center',
    color: '#ffcc00',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 15
  },
 
  teamStyle:{
    flex: 0.7,
    margin: 10,
    backgroundColor: '#3f3f3f',
    borderRadius: 40,
    justifyContent: 'space-between'
  },
 
  textFioStyle:{
  color: 'white',
  fontSize: 20,
  margin: 5,
  textDecorationLine: 'underline',
  textDecorationColor: '#ffcc00',
  },
 
  fioStyle:{
    marginRight: 70,
    alignItems: 'center'
  },
 
  imgStyle:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 30
  },
 
  info:{
    height: 150,
    backgroundColor: '#3f3f3f',
    margin: 10,
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
    fontSize: 24,
    margin: 5,
    fontWeight: 'bold'
  }
});