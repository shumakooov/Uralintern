import React, {useState} from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, ScrollView} from 'react-native';

const InterpreterScreen = () => (
    <View style={styles.back}>
        <ScrollView>
            <SafeAreaView>
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
        <View style={styles.footerStyle}>
            <Image style={styles.imgFooter} source={require('../images/test_img5.png')} />
            <Image style={styles.imgFooter} source={require('../images/test_img6.png')} />
            <Image style={styles.imgFooter} source={require('../images/test_img7.png')} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    competencies:{
        textAlign: 'left',
        color: '#ffcc00',
        fontSize: 16,
        marginLeft: 25,
        marginBottom: 15,
        marginTop: 10

    },
    EvaluationText:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: 20,
        margin: 5,
        marginBottom: 25,
        marginTop: 10
    },
    evaluation:{
        backgroundColor: '#3f3f3f',
        borderRadius: 30,
        marginHorizontal:20,
        paddingBottom:25,
        marginBottom:25
    },
    back:{
        flex: 1,
        backgroundColor: '#393939',
    },
    imgFooter: {
        width:30,
        height:30,
        marginLeft:50,
        marginRight:50,
    },
    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: 24,
        margin: 5,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 10
    },
    footerStyle:{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 65,
        backgroundColor: '#ffffff',
        alignItems:'center',
        justifyContent: 'flex-end'
    },
});

export default InterpreterScreen
