import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Graph from "../components/forInterpreterScreen/Graph";

const InterpreterScreen = () => {
const media = 'http://studprzi.beget.tech/'
const[grades, setGrades] = React.useState({});

const getData = async() => {
    try{
        const token = await AsyncStorage.getItem('token');
        if (token != null){
            const data = await axios.get(media + 'api/grade/get/report', {headers: {Authorization: 'Token ' + token}})
            setGrades(data.data )
        }

    }catch(e){
        console.log(e.message);
    }
}

React.useEffect(() => {
        getData()
    },
    []);

return (
    <View style={styles.back}>
        <ScrollView>
            <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                <Text style={styles.textTopic}>Персональный отчёт</Text>
            </SafeAreaView>
            {grades.rating ?
                <>
                    <Graph label={'Общая оценка'} grades={grades.rating.general}/>
                    <Graph label={'Самооценка'} grades={grades.rating.self}/>
                    <Graph label={'Команда'} grades={grades.rating.team}/>
                    <Graph label={'Эксперты'} grades={grades.rating.expert}/>
                </> : <View style={styles.noInfo}>
                    <ActivityIndicator animating={true} size="large" color="#ffcc00" />
                </View>}
        </ScrollView>
    </View>
)}

const styles = StyleSheet.create({
    noInfo: {
        marginTop: '20%'
    },
    back:{
        flex: 1,
        backgroundColor: '#393939',
    },
    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginBottom: '8%',
        marginTop: '2%'
    },
});

export default InterpreterScreen
