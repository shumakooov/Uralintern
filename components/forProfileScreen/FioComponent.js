import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StyleSheet, Text, View} from "react-native";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import axios from "axios";

const FIO = () => {
    const[dataset, setDataset] = React.useState({});

    const getData = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                const data = await axios.get('http://studprzi.beget.tech/api/trainee/team', {headers: {Authorization: 'Token ' + token}})
                setDataset(data.data)
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
        <View style={styles.fioStyle}>
                <View style={styles.underline}>
                    {dataset.trainee ? <Text style={styles.textFioStyle}>{dataset.trainee.username.split(' ')[0]}</Text> : <Text style={styles.textFioStyle}>Загрузка...</Text>}
                </View>
                <View style={styles.underline}>
                    {dataset.trainee ? <Text style={styles.textFioStyle}>{dataset.trainee.username.split(' ')[1]}</Text > : <Text style={styles.textFioStyle}>Загрузка...</Text>}
                </View>
                <View style={styles.underline}>
                    { dataset.trainee? <Text style={styles.textFioStyle}>{dataset.trainee.username.split(' ')[2]}</Text> : <Text style={styles.textFioStyle}>Загрузка...</Text>}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    underline: {
        borderStyle: "solid",
        borderColor: '#ffcc00',
        borderBottomWidth: 1.5,
        width: '135%',
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
        alignItems: 'center',
    },

})

export default FIO;