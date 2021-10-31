import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button, TouchableHighlight, TouchableNativeFeedback, ScrollView} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize} from "react-native-responsive-dimensions";


const EvaluationScreen = () => (
    <View style={styles.back}>
    <ScrollView>
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
        <Text style={styles.textTopic}>Оценка команды</Text>
    </SafeAreaView>
        <View style={styles.list}>
            <Text style={styles.listText}>Выбери мероприятие</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>Выбери, кого будешь оценивать</Text>
        </View>

        <View style={styles.competences}>
            <Text style={styles.competencesTopic}>Компетенции</Text>

            <View>
                <Text style={styles.competencesItems}>Вовлеченность</Text>
            </View>

            <View>
                <Text style={styles.competencesItems}>Организованность</Text>
            </View>

            <View>
                <Text style={styles.competencesItems}>Обучаемость</Text>
            </View>

            <View>
                <Text style={styles.competencesItems}>Командность</Text>
            </View>

            <View style={styles.buttonStyle}>
                <TouchableNativeFeedback>
                    <Button
                    title="Сохранить оценки"
                    color='#ffcc00'

                    />
                </TouchableNativeFeedback>
            </View>
        </View>
        <View style={styles.infoScores}>
            <Image style={styles.infoImg} source={require('../images/info.png')} />
            <Text style={styles.infoText}>Информация по оценкам</Text>
          </View>
          </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    listText:{
        fontSize: responsiveFontSize(2),
        color: '#ffcc00',
        paddingTop: 5,
        paddingBottom: 5
    },

    list:{
        borderWidth: 2,
        borderColor: '#ffcc00',
        width: '70%',
        padding: 5,
        marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#282828',
        marginHorizontal:'15%',
    },

    back:{
        flex: 1,
        backgroundColor: '#393939',
  },

    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(3),
        margin: 5,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 10
  },

    competences:{
        flex: 0.91,
        backgroundColor: '#3f3f3f',
        margin: 10,
        borderRadius: 40,
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: 30
  },

    competencesTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.7),
        fontWeight: 'bold',
  },

    competencesItems:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.2),
        margin: 20,
        marginBottom: 50
  },

    buttonStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#393939',
        marginTop: 35,
        width: '60%',
        borderColor: '#ffcc00',
  },

    infoImg:{
        height: 25,
        width: 25,
  },

    infoScores:{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingBottom: 10,
        justifyContent: 'center'
    },

    infoText: {
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.8),
        margin: 5,
    }
});

export default EvaluationScreen
