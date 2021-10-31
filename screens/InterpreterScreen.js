import React, {useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, ScrollView} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize} from "react-native-responsive-dimensions";

const InterpreterScreen = () => (
    <View style={styles.back}>
        <ScrollView>
            <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                <Text style={styles.textTopic}>Персональный отчёт</Text>
            </SafeAreaView>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Общая оценка</Text>
                <Text style={styles.competencies}>Вовлечённость</Text>
                <Text style={styles.competencies}>Организованность</Text>
                <Text style={styles.competencies}>Обучаемость</Text>
                <Text style={styles.competencies}>Командность</Text>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Самооценка</Text>
                <Text style={styles.competencies}>Вовлечённость</Text>
                <Text style={styles.competencies}>Организованность</Text>
                <Text style={styles.competencies}>Обучаемость</Text>
                <Text style={styles.competencies}>Командность</Text>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Куратор</Text>
                <Text style={styles.competencies}>Вовлечённость</Text>
                <Text style={styles.competencies}>Организованность</Text>
                <Text style={styles.competencies}>Обучаемость</Text>
                <Text style={styles.competencies}>Командность</Text>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Команда</Text>
                <Text style={styles.competencies}>Вовлечённость</Text>
                <Text style={styles.competencies}>Организованность</Text>
                <Text style={styles.competencies}>Обучаемость</Text>
                <Text style={styles.competencies}>Командность</Text>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Эксперты</Text>
                <Text style={styles.competencies}>Вовлечённость</Text>
                <Text style={styles.competencies}>Организованность</Text>
                <Text style={styles.competencies}>Обучаемость</Text>
                <Text style={styles.competencies}>Командность</Text>
            </View>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    competencies:{
        textAlign: 'left',
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.3),
        marginLeft: '7%',
        marginBottom: '5%',
        marginTop: '3%'

    },
    EvaluationText:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2),
        marginBottom: '8%',
        marginTop: '3%'
    },
    evaluation:{
        backgroundColor: '#3f3f3f',
        borderRadius: 30,
        marginHorizontal: '3%',
        paddingBottom: '6%',
        marginBottom: '6%'
    },
    back:{
        flex: 1,
        backgroundColor: '#393939',
    },
    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.1),
        fontWeight: 'bold',
        marginBottom: '8%',
        marginTop: '2%'
    },
});

export default InterpreterScreen
