import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Image, StyleSheet, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import axios from "axios";

const Team = () => {
    const[dataset, setDataset] = React.useState({});
    console.log(dataset)

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
        <View style={styles.teamStyle}>
            <Text style={styles.textTeam}>Ваша команда №1</Text>
            <View style={styles.team}>
                <Image style={styles.imgStyleTeam} source={require('../images/test_img1.jpeg')}/>
                <Text style={styles.textTeamFio}>Обабков Илья</Text>
                <Text style={styles.textTeamRole}>Дизайнер</Text>
            </View>
            <View style={styles.team}>
                <Image style={styles.imgStyleTeam} source={require('../images/test_img2.png')}/>
                <Text style={styles.textTeamFio}>Шадрин Денис</Text>
                <Text style={styles.textTeamRole}>Тимлид</Text>
            </View>
            <View style={styles.team}>
                <Image style={styles.imgStyleTeam} source={require('../images/test_img3.jpg')}/>
                <Text style={styles.textTeamFio}>Степаненко Андрей</Text>
                <Text style={styles.textTeamRole}>Программист</Text>
            </View>
            <View style={styles.team}>
                <Image style={styles.imgStyleTeam} source={require('../images/test_img4.jpg')}/>
                <Text style={styles.textTeamFio}>Ботов Михаил</Text>
                <Text style={styles.textTeamRole}>Программист</Text>
            </View>
            <View style={styles.team}>
                <Image style={styles.imgStyleTeam} source={require('../images/test_img4.jpg')}/>
                <Text style={styles.textTeamFio}>Кох Елена</Text>
                <Text style={styles.textTeamRole}>Аналитик</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

});

export default Team;