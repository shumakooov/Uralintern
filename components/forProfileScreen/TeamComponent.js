import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Image, StyleSheet, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import axios from "axios";
import {elementsThatOverlapOffsets} from "react-native-web/dist/vendor/react-native/VirtualizeUtils";

const Team = () => {
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
        <View style={styles.teamStyle}>
            {dataset.team ? <Text style={styles.textTeam}>Команда {' "' + dataset.team[0].team_name + '"'}</Text> : <Text style={styles.textTeam}>Загрузка...</Text>}
            {dataset.team ? dataset.team.map(user => (
                <React.Fragment>
                    <View style={styles.team}>
                        <Image style={styles.imgStyleTeam} source={require('../../images/test_img1.jpeg')}/>
                        <Text style={styles.textTeamFio}>{user.username.split(' ')[0] + ' ' + user.username.split(' ')[1]}</Text>
                        <Text style={styles.textTeamRole}>{user.internship}</Text>
                    </View>
                </React.Fragment>
                )) : <Text style={styles.textTeam}>Загрузка...</Text>
            }
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
        marginLeft: '6%',
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
        justifyContent: 'space-between',
    },

});

export default Team;