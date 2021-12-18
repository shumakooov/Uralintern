import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Button,
    TouchableNativeFeedback,
    ScrollView,
    ActivityIndicator, Alert
} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import RadioBlock from '../components/RadioBlock';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import EvaluationInfo from '../components/forEvaluationScreen/InfoEvaluation';
import DropDownPicker from 'react-native-dropdown-picker';


const EvaluationScreen = () => {
    const[infoEvaluating, setInfoEvaluating] = React.useState({});
    const getInfoEvaluating = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                const data = await axios.get('http://studprzi.beget.tech/api/grade/description', {headers: {Authorization: 'Token ' + token}})
                setInfoEvaluating(data.data)
            }
        }catch(e){
            console.log(e.message);
        }
    }
    React.useEffect(() => {
            getInfoEvaluating()
        },
        []);


    const[nameTeam, setNameTeam] = React.useState({});
    const getNameTeam = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                const data = await axios.get('http://studprzi.beget.tech/api/trainee/team',
                    {headers: {Authorization: 'Token ' + token}})
                let allTeam = data.data.team.map(element =>
                    new Object({label: element.username.split(' ')[0] + ' ' + element.username.split(' ')[1], value: element.id}) )
                allTeam.push(new Object({label: 'Самооценка', value: data.data.trainee.id}))
                setNameTeam(allTeam)
            }
        }catch(e){
            console.log(e.message);
        }
    }
    React.useEffect(() => {
            getNameTeam()
        },
        []);


    const[stage, setStage] = React.useState({});
    const getStage = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                const data = await axios.get('http://studprzi.beget.tech/api/stage',
                    {headers: {Authorization: 'Token ' + token}})
                let allStage = data.data.stages.map(element =>
                    new Object({label: element.stage_name, value: element.id}) )
                setStage(allStage)
            }
        }catch(e){
            console.log(e.message);
        }
    }
    React.useEffect(() => {
            getStage()
        },
        []);

    const saveGrades = async () => {
        try{
            const allGrades = {grade:{}}
            if (typeof competence1 !== "undefined") {
                allGrades.grade.competence1 = competence1
            }
            if (typeof competence2 !== "undefined") {
                allGrades.grade.competence2 = competence2
            }
            if (typeof competence3 !== "undefined") {
                allGrades.grade.competence3 = competence3
            }
            if (typeof competence4 !== "undefined") {
                allGrades.grade.competence4 = competence4
            }
            const token = await AsyncStorage.getItem('token');
            if (token != null && value != null && value2 != null){
                allGrades.grade.stage =  value
                allGrades.grade.trainee =  value2
                console.log(allGrades)
                let data = await fetch('http://studprzi.beget.tech/api/grade/create-update', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + token
                    },
                    body: JSON.stringify(allGrades)
                });
                Alert.alert("Успешно", "Оценка отправлена", [
                    {text: "OK"}])
            } else {
                Alert.alert("Ошибка", "Оценка не отправлена", [
                    {text: "OK"}])
            }
        }catch(e){
            Alert.alert("Ошибка", e.message, [
                {text: "OK"}])
        }
    }


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] =  useState([]);

    const[competence1, setCompetence1] = useState();
    const[competence2, setCompetence2] = useState();
    const[competence3, setCompetence3] = useState();
    const[competence4, setCompetence4] = useState();

    return (
        <View style={styles.back}>
            { nameTeam[0] && stage[0] && infoEvaluating.descriptions?
                <>
                    <ScrollView>
                        <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                            <Text style={styles.textTopic}>Оценка команды</Text>
                        </SafeAreaView>
                        <View style={[styles.list, styles.dropbox1]}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={stage}
                                setOpen={setOpen}
                                zIndex={10}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder={"Выбери этап"}
                                placeholderStyle={{color: '#ffcc00'}}
                                style={styles.listText}
                                textStyle={{color: '#ffcc00'}}
                                dropDownContainerStyle={{backgroundColor: '#282828', borderColor: '#ffcc00', borderWidth: 2, zIndex: 2}}
                                arrowIconStyle={{backgroundColor: '#ffcc00'}}
                                tickIconStyle={{color: '#ffcc00'}}
                            />
                        </View>
                        <View style={[styles.list, styles.dropbox2]}>
                            <DropDownPicker
                                open={open2}
                                value={value2}
                                items={nameTeam}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItems2}
                                placeholder={"Выбери, кого будешь оценивать"}
                                placeholderStyle={{color: '#ffcc00'}}
                                style={styles.listText}
                                textStyle={{color: '#ffcc00'}}
                                dropDownContainerStyle={{backgroundColor: '#282828', borderColor: '#ffcc00', borderWidth: 2, zIndex: 2}}
                                arrowIconStyle={{backgroundColor: '#ffcc00'}}
                            />
                        </View>

                        <View style={styles.competences}>
                            <Text style={styles.competencesTopic}>Компетенции</Text>

                            <View style={styles.helpContainer}>
                                <Text style={styles.competencesItems}>Вовлеченность</Text>
                                <RadioBlock setCompetence = {setCompetence1}/>
                            </View>
                            <View style={styles.helpContainer}>
                                <Text style={styles.competencesItems}>Организованность</Text>
                                <RadioBlock  setCompetence = {setCompetence2}/>
                            </View>

                            <View style={styles.helpContainer}>
                                <Text style={styles.competencesItems}>Обучаемость</Text>
                                <RadioBlock  setCompetence = {setCompetence3}/>
                            </View>

                            <View style={styles.helpContainer}>
                                <Text style={styles.competencesItems}>Командность</Text>
                                <RadioBlock  setCompetence = {setCompetence4}/>
                            </View>

                            <View style={styles.buttonStyle}>
                                <TouchableNativeFeedback>
                                    <Button
                                        title="Сохранить оценки"
                                        color='#ffcc00'
                                        onPress={saveGrades}
                                    />
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        <View style={styles.infoScores}>
                            <Image style={styles.infoImg} source={require('../images/info.png')}/>
                            <Text style={styles.infoText}>Информация по оценкам</Text>
                        </View>
                        <EvaluationInfo info = {infoEvaluating}/>
                    </ScrollView>
                </> : <ActivityIndicator animating={true} size="large" color="#ffcc00" />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dropbox1: {
      zIndex: 2
    },

    dropbox2: {
      zIndex: 1
    },

    helpContainer:{
        width: responsiveWidth(70),
    },
    listText:{
        fontSize: responsiveFontSize(2),
        color: '#ffcc00',
        backgroundColor: '#282828',
        borderWidth: 2,
        borderColor: '#ffcc00',
        borderRadius: 10,
        zIndex: 1,
    },

    list:{
        width: '70%',
        padding: '1%',
        marginBottom: '5%',
        paddingLeft: '3%',
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
        padding: '7%',
        zIndex: 0,
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
        paddingBottom: '2%',
        justifyContent: 'center'
    },

    infoText: {
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.8),
        margin: '1%',
    }
});

export default EvaluationScreen
