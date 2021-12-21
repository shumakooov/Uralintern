import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import RadioButton from "./forEvaluationScreen/RadioButton";

const RadioBlock = (props) => {
    const[value, setValue] = React.useState();

    const setValueLog = (value) => {
        setValue(value)
        props.setCompetence(value )
    }
    return (
        <View style={styles.container}>
            <RadioButton value={-1} blockValue={setValueLog} selectedValue={value}/>
            <RadioButton value={0} blockValue={setValueLog} selectedValue={value}/>
            <RadioButton value={1} blockValue={setValueLog} selectedValue={value}/>
            <RadioButton value={2} blockValue={setValueLog} selectedValue={value}/>
        </View>
    );
}

export default RadioBlock;

const styles = StyleSheet.create({
    container: {
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    radioText: {
        fontSize: responsiveFontSize(2),
        color: 'gold',
        fontWeight: '600',
        textAlign: 'center',
        top: 5
    },
    radioCircle: {
        height: responsiveHeight(4.5),
        width: responsiveWidth(9.5),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080'
    },
    selectedRb: {
        height: responsiveHeight(4.5),
        width: responsiveWidth(9.5),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
    },
});
