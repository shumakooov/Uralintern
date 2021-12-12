import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import {
    VictoryChart,
    VictoryBar,
    VictoryTheme,
    VictoryStack,
    VictoryPortal,
    VictoryLabel,
    VictoryAxis,
} from "victory-native";

const InterpreterScreen = () => (
    <View style={styles.back}>
        <ScrollView>
            <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                <Text style={styles.textTopic}>Персональный отчёт</Text>
            </SafeAreaView>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>Общая оценка</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: -30, left: -30}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={9} height={250} width={275}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: 20 },
                                        labels: { padding: -20 }
                                    }}
                                    labelComponent={
                                        <VictoryPortal>
                                            <VictoryLabel/>
                                        </VictoryPortal>
                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: -1, label: "-1"},
                                            {x: 2, y: 1, label: "1"},
                                            {x: 3, y: 2, label: "2"},
                                            {x: 4, y: 1.5, label: "1.5"}
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

                    <View style={{top: -30, left: -30}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={9} height={250} width={275}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: 20 },
                                        labels: { padding: -20 }
                                    }}
                                    labelComponent={
                                        <VictoryPortal>
                                            <VictoryLabel/>
                                        </VictoryPortal>
                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: -1, label: "-1"},
                                            {x: 2, y: 1, label: "1"},
                                            {x: 3, y: 2, label: "2"},
                                            {x: 4, y: 1.5, label: "1.5"}
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
                <Text style={styles.EvaluationText}>Куратор</Text>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.competencies}>Вовлечённость</Text>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.competencies}>Командность</Text>
                    </View>

                    <View style={{top: -30, left: -30}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={9} height={250} width={275}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: 20 },
                                        labels: { padding: -20 }
                                    }}
                                    labelComponent={
                                        <VictoryPortal>
                                            <VictoryLabel/>
                                        </VictoryPortal>
                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: -1, label: "-1"},
                                            {x: 2, y: 1, label: "1"},
                                            {x: 3, y: 2, label: "2"},
                                            {x: 4, y: 1.5, label: "1.5"}
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

                    <View style={{top: -30, left: -30}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={9} height={250} width={275}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: 20 },
                                        labels: { padding: -20 }
                                    }}
                                    labelComponent={
                                        <VictoryPortal>
                                            <VictoryLabel/>
                                        </VictoryPortal>
                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: -1, label: "-1"},
                                            {x: 2, y: 1, label: "1"},
                                            {x: 3, y: 2, label: "2"},
                                            {x: 4, y: 1.5, label: "1.5"}
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

                    <View style={{top: -30, left: -30}}>
                        <View style={[styles.graph, {transform: [{ rotate: "90deg" }]
                        }]}>
                            <VictoryChart domainPadding={9} height={250} width={275}>
                                <VictoryStack
                                    colorScale={["gold"]}
                                    style={{
                                        data: { width: 20 },
                                        labels: { padding: -20 }
                                    }}
                                    labelComponent={
                                        <VictoryPortal>
                                            <VictoryLabel/>
                                        </VictoryPortal>
                                    }
                                >
                                    <VictoryBar
                                        data={[
                                            {x: 1, y: -1, label: "-1"},
                                            {x: 2, y: 1, label: "1"},
                                            {x: 3, y: 2, label: "2"},
                                            {x: 4, y: 1.5, label: "1.5"}
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
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
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
