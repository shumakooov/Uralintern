// Компонент графика
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

const Graph = ({grades, label}) => {

    // Формулы для вычисления длины и направления столбика на диаграмме
    const sizeToString = (grade) => {
        return ( grade > 0 ? 100 * Math.abs(grade) / 2 : 100 * Math.abs(grade)).toString() + '%'
    }

    const segmentSizeLeft = (grade) => {
        return {width: grade < 0 ? sizeToString(grade) : 0}
    }

    const segmentSizeRight = (grade) => {
        return {width: grade > 0 ? sizeToString(grade) : 0}
    }

    return (
        <View style={styles.back}>
            <View style={styles.evaluation}>
                <Text style={styles.EvaluationText}>{label}</Text>

                <View style={styles.graph_label}>
                    <View style={styles.vertical_line}>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.competencies}>Вовлеченность</Text>
                        <Text style={styles.grade_text_style}>{grades.competence1}</Text>
                        <View style={styles.graph_segment}>
                            <View style={styles.graph_segment_left}>
                                <View style={[styles.line, segmentSizeLeft(grades.competence1)]}>
                                </View>
                            </View>
                            <View style={styles.graph_segment_right}>
                                <View style={[styles.line, segmentSizeRight(grades.competence1)]}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.competencies}>Организованность</Text>
                        <Text style={styles.grade_text_style}>{grades.competence2}</Text>
                        <View style={styles.graph_segment}>
                            <View style={styles.graph_segment_left}>
                                <View style={[styles.line, segmentSizeLeft(grades.competence2)]}>
                                </View>
                            </View>
                            <View style={styles.graph_segment_right}>
                                <View style={[styles.line, segmentSizeRight(grades.competence2)]}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.competencies}>Обучаемость</Text>
                        <Text style={styles.grade_text_style}>{grades.competence3}</Text>
                        <View style={styles.graph_segment}>
                            <View style={styles.graph_segment_left}>
                                <View style={[styles.line, segmentSizeLeft(grades.competence3)]}>
                                </View>
                            </View>
                            <View style={styles.graph_segment_right}>
                                <View style={[styles.line, segmentSizeRight(grades.competence3)]}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.competencies}>Командность</Text>
                        <Text style={styles.grade_text_style}>{grades.competence4}</Text>
                        <View style={styles.graph_segment}>
                            <View style={styles.graph_segment_left}>
                                <View style={[styles.line, segmentSizeLeft(grades.competence4)]}>
                                </View>
                            </View>
                            <View style={styles.graph_segment_right}>
                                <View style={[styles.line, segmentSizeRight(grades.competence4)]}>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({
    border: {
        borderColor: '#ccffff',
        borderWidth: 1
    },
    grade_text_style:{
        textAlign: 'center',
        width: '10%',
        color: '#ffcc00'
    },
    vertical_line:{
        backgroundColor: '#ffcc00',
        width: 2,
        height: '110%',
        position: 'absolute',
        right: '20%',
        bottom: '2%',
        zIndex: 2
    },
    graph_label:{
        alignItems: 'center',
        alignContent: 'space-between'
    },
    graph_segment:{
        width: '30%',
        // marginLeft: '10%',
        flexDirection: 'row'
    },
    graph_segment_left:{
        width: '33%',
        alignItems: 'flex-end'
    },
    graph_segment_right:{
        width: '66%'
    },
    line: {
        backgroundColor: '#ffcc00',
        height: 20,
    },
    row:{
        marginBottom:'5%',
        flexDirection: 'row',
    },
    competencies:{
        textAlign: 'left',
        width: '40%',
        color: 'white',
        fontSize: 15,
    },
    EvaluationText:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: 20,
        marginBottom: '8%',
        marginTop: '3%'
    },
    evaluation:{
        backgroundColor: '#3f3f3f',
        borderRadius: 30,
        paddingBottom: '6%',
        marginTop: '1%',
        marginBottom: '10%',
        alignItems: 'center',
    },
    back:{
        flex: 1,
        backgroundColor: '#393939',
    },
    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '8%',
        marginTop: '2%'
    },
})
