// Компонент, который создает блок из четырех радиокнопок
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import RadioButton from "./RadioButton";

const RadioBlock = (props) => {
    const[value, setValue] = React.useState();

    const setValueLog = (value) => {
        setValue(value)
        props.setCompetence(value)
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
    }
});
