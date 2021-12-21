import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const Team = props => {
    return (
        <View style={styles.teamStyle}>
            <Text style={styles.textTeam}>Команда {' "' + props.team[0].team_name + '"'}</Text>
            {props.team.map((user, index) => (
                <React.Fragment key={index}>
                    <View style={styles.team}>
                        <Image source={user.image !== null ?  {uri: props.mediaImg + user.image} : require('../../images/zaglushka.png')} style={styles.imgStyleTeam} />
                        <Text style={styles.textTeamFio}>{user.username.split(' ')[0] + ' ' + user.username.split(' ')[1]}</Text>
                        <Text style={styles.textTeamRole}>{user.internship}</Text>
                    </View>
                </React.Fragment>
            ))
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
        minHeight: responsiveHeight(1),
        margin: '3%',
        backgroundColor: '#3f3f3f',
        borderRadius: 40,
        marginBottom: 125,
        paddingBottom: '3%'
    },

});

export default Team;
