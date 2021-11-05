import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
    state = {
        value: null,
    };

    render() {
        const { PROP } = this.props;
        const { value } = this.state;

        return (
            <View>
                {PROP.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>

                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                }}>
                                <Text style={styles.radioText}>{res.text}</Text>
                                {value === res.key && <View style={styles.selectedRb} />}
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
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    radioText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600'
    },
    radioCircle: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    selectedRb: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },

});
