import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions,
    ActivityIndicator,

} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {
    VictoryChart,
    VictoryBar,
    VictoryTheme,
    VictoryStack,
    VictoryPortal,
    VictoryLabel,
    VictoryAxis,
} from "victory-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const InterpreterScreen = () => {
const media = 'http://studprzi.beget.tech/'
const[grades, setGrades] = React.useState({});

const getData = async() => {
    try{
        const token = await AsyncStorage.getItem('token');
        if (token != null){
            const data = await axios.get(media + 'api/grade/get/report', {headers: {Authorization: 'Token ' + token}})
            setGrades(data.data )
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
    <View style={styles.back}>
        <ScrollView>
            <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                <Text style={styles.textTopic}>Персональный отчёт</Text>
            </SafeAreaView>
            {grades.rating ?
                <>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Общая оценка</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: "-8%", left: "-13%"}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={responsiveWidth(3)} height={responsiveHeight(29)} width={responsiveWidth(71)}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: responsiveWidth(6.5) },
                                        labels: { padding: responsiveHeight(-2.5) }
                                    }}
                                    labelComponent={

                                            <VictoryLabel/>

                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: grades.rating.general.competence1, label: grades.rating.general.competence1},
                                            {x: 2, y: grades.rating.general.competence2, label: grades.rating.general.competence2},
                                            {x: 3, y: grades.rating.general.competence3, label: grades.rating.general.competence3},
                                            {x: 4, y: grades.rating.general.competence4, label: grades.rating.general.competence4}
                                        ]}
                                    />
                            </VictoryStack>
                                <VictoryAxis crossAxis style={{
                                    axis: {stroke: 'gold'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                                <VictoryAxis dependentAxis style={{
                                    axis: {stroke: 'none'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Самооценка</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: "-8%", left: "-13%"}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={responsiveWidth(3)} height={responsiveHeight(29)} width={responsiveWidth(71)}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: responsiveWidth(6.5) },
                                        labels: { padding: responsiveHeight(-2.5) }
                                    }}
                                    labelComponent={

                                            <VictoryLabel/>

                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: grades.rating.self.competence1, label: grades.rating.self.competence1},
                                            {x: 2, y: grades.rating.self.competence2, label: grades.rating.self.competence2},
                                            {x: 3, y: grades.rating.self.competence3, label: grades.rating.self.competence3},
                                            {x: 4, y: grades.rating.self.competence4, label: grades.rating.self.competence4}
                                        ]}
                                    />
                                </VictoryStack>
                                <VictoryAxis crossAxis style={{
                                    axis: {stroke: 'gold'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                                <VictoryAxis dependentAxis style={{
                                    axis: {stroke: 'none'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Команда</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: "-8%", left: "-13%"}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={responsiveWidth(3)} height={responsiveHeight(29)} width={responsiveWidth(71)}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: responsiveWidth(6.5) },
                                        labels: { padding: responsiveHeight(-2.5) },
                                    }}
                                    labelComponent={

                                            <VictoryLabel/>

                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: grades.rating.team.competence1, label: grades.rating.team.competence1},
                                            {x: 2, y: grades.rating.team.competence2, label: grades.rating.team.competence2},
                                            {x: 3, y: grades.rating.team.competence3, label: grades.rating.team.competence3},
                                            {x: 4, y: grades.rating.team.competence4, label: grades.rating.team.competence4}
                                        ]}
                                    />
                                </VictoryStack>
                                <VictoryAxis crossAxis style={{
                                    axis: {stroke: 'gold'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                                <VictoryAxis dependentAxis style={{
                                    axis: {stroke: 'none'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Эксперты</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: "-8%", left: "-13%"}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={responsiveWidth(3)} height={responsiveHeight(29)} width={responsiveWidth(71)}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: responsiveWidth(6.5) },
                                        labels: { padding: responsiveHeight(-2.5) }
                                    }}
                                    labelComponent={

                                            <VictoryLabel/>

                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: grades.rating.expert.competence1, label: grades.rating.expert.competence1},
                                            {x: 2, y: grades.rating.expert.competence2, label: grades.rating.expert.competence2},
                                            {x: 3, y: grades.rating.expert.competence3, label: grades.rating.expert.competence3},
                                            {x: 4, y: grades.rating.expert.competence4, label: grades.rating.expert.competence4}
                                        ]}
                                    />
                                </VictoryStack>
                                <VictoryAxis crossAxis style={{
                                    axis: {stroke: 'gold'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                                <VictoryAxis dependentAxis style={{
                                    axis: {stroke: 'none'},
                                    tickLabels: {fill: 'none'}
                                }}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </View>
            </View>
                </> : <View style={styles.noInfo}>
                    <ActivityIndicator animating={true} size="large" color="#ffcc00" />
                </View>}
        </ScrollView>
    </View>
)}

const styles = StyleSheet.create({
    noInfo: {
        marginTop: '20%'
    },
    graph:{

    },

    competencies:{
        textAlign: 'left',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2),
        marginLeft: '7%',
        marginBottom: '5%',
        marginTop: '3%',
        paddingBottom: 20
    },
    EvaluationText:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.5),
        marginBottom: '8%',
        marginTop: '3%'
    },
    evaluation:{
        backgroundColor: '#3f3f3f',
        borderRadius: 30,
        marginHorizontal: '3%',
        paddingBottom: '6%',
        marginBottom: '6%'
    },
    back:{
        flex: 1,
        backgroundColor: '#393939',
    },
    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginBottom: '8%',
        marginTop: '2%'
    },
});

export default InterpreterScreen
