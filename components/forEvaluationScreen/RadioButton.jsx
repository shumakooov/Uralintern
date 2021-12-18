import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const RadioButton = (props) => {
    const[key, setKey] = React.useState();
    const[id, setId] = React.useState();
    const[value, setValue] = React.useState();

    return (
        <View>
            <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                    props.blockValue(props.value)
                    setValue(props.value)}}>
                {props.selectedValue === value && <View style={styles.selectedRb}/>}
            </TouchableOpacity>
            <Text style={styles.radioText}>{props.value}</Text>
        </View>
    );
}

export default RadioButton;

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
