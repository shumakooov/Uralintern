import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button, TouchableHighlight, TouchableNativeFeedback, ScrollView} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import RadioButton from '../components/RadioButton';

const PROP = [
    {
        key: 'key1',
        text: '-1',
    },
    {
        key: 'key2',
        text: '0',
    },
    {
        key: 'key3',
        text: '1',
    },
    {
        key: 'key4',
        text: '2',
    },
];

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

            <View style={styles.helpContainer}>
                <Text style={styles.competencesItems}>Вовлеченность</Text>
                <View style={styles.container}>
                    <RadioButton PROP={PROP} />
                </View>
            </View>

            <View style={styles.helpContainer}>
                <Text style={styles.competencesItems}>Организованность</Text>
                <View style={styles.container}>
                    <RadioButton PROP={PROP} />
                </View>
            </View>

            <View style={styles.helpContainer}>
                <Text style={styles.competencesItems}>Обучаемость</Text>
                <View style={styles.container}>
                    <RadioButton PROP={PROP} />
                </View>
            </View>

            <View style={styles.helpContainer}>
                <Text style={styles.competencesItems}>Командность</Text>
                <View style={styles.container}>
                    <RadioButton PROP={PROP} />
                </View>
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
    helpContainer:{
        width: responsiveWidth(70),
    },
    listText:{
        fontSize: responsiveFontSize(2),
        color: '#ffcc00',
        paddingTop: '1%',
        paddingBottom: '1%'
    },

    list:{
        borderWidth: 2,
        borderColor: '#ffcc00',
        width: '70%',
        padding: '1%',
        marginBottom: '5%',
        borderRadius: 10,
        paddingLeft: '3%',
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
        margin: '5%',
        fontWeight: 'bold',
        marginBottom: '7%',
        marginTop: '2%'
    },

    competences:{
        flex: 0.91,
        backgroundColor: '#3f3f3f',
        margin: '3%',
        borderRadius: 40,
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '7%'
    },

    competencesTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },

    competencesItems:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.2),
        margin: '7%',
        marginBottom: '1%'
    },

    buttonStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#393939',
        marginTop: '10%',
        width: '60%',
        borderColor: '#ffcc00',
    },

    infoImg:{
        height: responsiveHeight(3),
        width: responsiveWidth(6.4),
    },

    infoScores:{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingBottom: '10%',
        justifyContent: 'center'
    },

    infoText: {
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.8),
        margin: '1%',
    }
});

export default EvaluationScreen
