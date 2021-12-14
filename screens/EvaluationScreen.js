import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Button,
    TouchableNativeFeedback,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import RadioButton from '../components/RadioButton';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import EvaluationInfo from '../components/forEvaluationScreen/InfoEvaluation';
import DropDownPicker from 'react-native-dropdown-picker';


const PROP = [
    {
        key: 'key1',
        text: '-1',
    },
    {
        key: 'key2',
        text: '0',
    },
    {
        key: 'key3',
        text: '1',
    },
    {
        key: 'key4',
        text: '2',
    },
];

const EvaluationScreen = () => {
    const[dataset, setDataset] = React.useState({});

    const getData = async() => {
        try{
            const token = await AsyncStorage.getItem('token');
            if (token != null){
                const data = await axios.get('http://studprzi.beget.tech/api/grade/description', {headers: {Authorization: 'Token ' + token}})
                setDataset(data.data)
            }

        }catch(e){
            console.log(e.message);
        }
    }
    React.useEffect(() => {
            getData()
        },
        []);
    console.log(dataset)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    const [open2, setOpen2] = useState(false);

    return (
        <View style={styles.back}>
            <ScrollView>
                <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
                    <Text style={styles.textTopic}>Оценка команды</Text>
                </SafeAreaView>
                <View style={[styles.list, styles.dropbox1]}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={"Выбери этап"}
                        placeholderStyle={{color: '#ffcc00'}}
                        style={styles.listText}
                        textStyle={{color: '#ffcc00'}}
                        dropDownContainerStyle={{backgroundColor: '#282828', borderColor: '#ffcc00', borderWidth: 2, zIndex: 2}}
                        arrowIconStyle={{backgroundColor: '#ffcc00'}}
                        tickIconStyle={{color: '#ffcc00'}}
                    />
                </View>

                <View style={[styles.list, styles.dropbox2]}>
                    <DropDownPicker
                        open={open2}
                        value={value}
                        items={items}
                        setOpen={setOpen2}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={"Выбери, кого будешь оценивать"}
                        placeholderStyle={{color: '#ffcc00'}}
                        style={styles.listText}
                        textStyle={{color: '#ffcc00'}}
                        dropDownContainerStyle={{backgroundColor: '#282828', borderColor: '#ffcc00', borderWidth: 2, zIndex: 2}}
                        arrowIconStyle={{backgroundColor: '#ffcc00'}}
                    />
                </View>

                <View style={styles.competences}>
                    <Text style={styles.competencesTopic}>Компетенции</Text>

                    <View style={styles.helpContainer}>
                        <Text style={styles.competencesItems}>Вовлеченность</Text>
                        <RadioButton PROP={PROP}/>
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.competencesItems}>Организованность</Text>
                        <RadioButton PROP={PROP}/>
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.competencesItems}>Обучаемость</Text>
                        <RadioButton PROP={PROP}/>
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.competencesItems}>Командность</Text>
                        <RadioButton PROP={PROP}/>
                    </View>

                    <View style={styles.buttonStyle}>
                        <TouchableNativeFeedback>
                            <Button
                                title="Сохранить оценки"
                                color='#ffcc00'
                            />
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={styles.infoScores}>
                    <Image style={styles.infoImg} source={require('../images/info.png')}/>
                    <Text style={styles.infoText}>Информация по оценкам</Text>
                </View>
                {dataset.descriptions ?
                <EvaluationInfo info = {dataset}/> : <ActivityIndicator animating={true} size="large" color="#ffcc00" />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    dropbox1: {
      zIndex: 2
    },

    dropbox2: {
      zIndex: 1
    },

    helpContainer:{
        width: responsiveWidth(70),
    },
    listText:{
        fontSize: responsiveFontSize(2),
        color: '#ffcc00',
        backgroundColor: '#282828',
        borderWidth: 2,
        borderColor: '#ffcc00',
        borderRadius: 10,
        zIndex: 1,
    },

    list:{
        width: '70%',
        padding: '1%',
        marginBottom: '5%',
        paddingLeft: '3%',
        marginHorizontal:'15%',
    },

    back:{
        flex: 1,
        backgroundColor: '#393939',
    },

    textTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(3),
        margin: '5%',
        fontWeight: 'bold',
        marginBottom: '7%',
        marginTop: '2%'
    },

    competences:{
        flex: 0.91,
        backgroundColor: '#3f3f3f',
        margin: '3%',
        borderRadius: 40,
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '7%',
        zIndex: 0,
    },

    competencesTopic:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },

    competencesItems:{
        textAlign: 'center',
        color: '#ffcc00',
        fontSize: responsiveFontSize(2.2),
        margin: '7%',
        marginBottom: '1%'
    },

    buttonStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#393939',
        marginTop: '10%',
        width: '60%',
        borderColor: '#ffcc00',
    },

    infoImg:{
        height: responsiveHeight(3),
        width: responsiveWidth(6.4),
    },

    infoScores:{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingBottom: '2%',
        justifyContent: 'center'
    },

    infoText: {
        color: '#ffcc00',
        fontSize: responsiveFontSize(1.8),
        margin: '1%',
    }
});

export default EvaluationScreen
