import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button, TouchableHighlight, TouchableNativeFeedback, ScrollView} from 'react-native';


const EvaluationScreen = () => (
    <View style={styles.back}>
    <ScrollView>
    <SafeAreaView>
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
        <View style={styles.footerStyle}>
          <Image style={styles.imgFooter} source={require('../images/test_img5.png')} />
          <Image style={styles.imgFooter} source={require('../images/test_img6.png')} />
          <Image style={styles.imgFooter} source={require('../images/test_img7.png')} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    listText:{
        fontSize: 16,
        color: '#ffcc00'
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
        marginLeft: 65
    },

    back:{
        flex: 1,
        backgroundColor: '#393939',
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
        fontSize: 20,
        fontWeight: 'bold',
  },

    competencesItems:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: 18,
        margin: 20,
        marginBottom: 50
  },

    buttonStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#393939',
        marginTop: 35,
        width: 200,
        borderColor: '#ffcc00'
  },

    footerStyle:{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 50,
        backgroundColor: '#ffffff',
        alignItems:'center',
        justifyContent: 'flex-end'
  },

    imgFooter: {
        width:30,
        height:30,
        marginLeft:50,
        marginRight:50,
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
        fontSize: 16,
        margin: 5,
    }
});

export default EvaluationScreen
