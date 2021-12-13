import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {responsiveFontSize} from "react-native-responsive-dimensions";

const EvaluationInfo = props => {
    return (
        <View style = {styles.evaluationInfo}>
            { props.info.descriptions.map(evaluation => (
                <>
                <Text style = {styles.evaluationInfoNameText}>{evaluation.name}</Text>
                <Text style = {styles.evaluationInfoText}> {evaluation.description}</Text>
                </>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    evaluationInfoNameText: {
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.8),
        margin: '1%',
        marginTop: '5%'
    },
    evaluationInfoText: {
        color: '#ffffff',
        fontSize: responsiveFontSize(1.8),
        margin: '1%',
    },
    evaluationInfo: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '1%',
    },
});

export default EvaluationInfo;