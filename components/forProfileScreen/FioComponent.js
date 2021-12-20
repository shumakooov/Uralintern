import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const FIO = props => {

    return (
        <View style={styles.info }>
            <Image source={props.trainee.image !== null ?  {uri: props.mediaImg + props.trainee.image} : require('../../images/zaglushka.png')} style={styles.imgStyle} />
            <View style={styles.fioStyle}>
                { props.trainee.username.split(' ').map(user => (
                <>
                    <View style={styles.underline}>
                        <Text style={styles.textFioStyle}>{user}</Text>
                    </View>
                </>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle:{
        width: responsiveWidth(28),
        height: responsiveHeight(13),
        borderRadius: 60,
        marginLeft: '7%',
    },

    info:{
        maxHeight: '29%',
        height: '27%',
        backgroundColor: '#3f3f3f',
        margin: '3%',
        borderRadius: 40,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

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
