import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

export default class RadioButton extends Component {
    state = {
        value: null,
    };

    render() {
        const { PROP } = this.props;
        const { value } = this.state;

        return (
            <View style={styles.container}>
                {PROP.map(res => {
                    return (
                        <View key={res.key}>

                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                }}>
                                <Text style={styles.radioText}>{res.text}</Text>
                                {value === res.key && <View style={styles.selectedRb}/>}
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    radioText: {
        fontSize: responsiveFontSize(2),
        color: '#000',
        fontWeight: '600'
    },
    radioCircle: {
        height: responsiveHeight(4.5),
        width: responsiveWidth(9.5),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    selectedRb: {
        height: responsiveHeight(4.5),
        width: responsiveWidth(9.5),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
    },

});
