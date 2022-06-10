import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'



export default function Conflict() {

    const [answer, setAnswer] = useState('');

    const sendAnswer = () => {
        alert('respondido')
    }

    return (
        <View style={styles.containerTela}>

            <View style={styles.containerConflict}>
                <Text style={styles.title}>Quero subir de cargo</Text>
                <Text style={styles.description}>Gostaria de subir de cargo, como faço para isso ocorrer mais rapidamente? </Text>
            </View>

            
            <View style={styles.containerDivisor}>
                <Text style={styles.divisor}>__________________________________________________________</Text>
                <Text style={styles.divisor}>Respostas</Text>
            </View>

            <View style={styles.containerAnswers}>
                <View style={styles.answers}>
                    <Text style={styles.answerUserName}>José</Text>
                    <Text style={styles.answer}>Você tentou conversar com o seu chefe?</Text>
                </View>
            </View>

            <View style={styles.containerRespond}>

                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput} onChangeText={text=>setAnswer(text)}/>
                </View>

                <TouchableOpacity onPress={()=>sendAnswer()}>
                    <View style={styles.buttom}>
                        <Image style={{width:20,height:20,marginBottom:10}} source={require('../../../assets/images/send.png')} />
                        <Text  style={{color: 'gray'}}>Enviar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTela:{
        padding: 15,
        flex:1,
        justifyContent: 'top',
    },
    containerConflict:{
        padding:15,
        flex:0.3,
        justifyContent: 'top'
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    description:{
        fontSize: 14,
        paddingBottom: 10
    },
    containerDivisor:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    divisor:{
        fontSize: 12,
        color: 'gray',
        marginTop: 10
    },
    containerAnswers:{
        padding:15,
        flex:0.6,
        justifyContent: 'top',
    },
    answers:{        
        padding:15,
        flex:0.25,
        justifyContent: 'top',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    answerUserName:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    answer:{
        fontSize: 14,
        paddingBottom: 10
    },
    containerRespond:{
        flex:0.2,
        justifyContent: 'bottom'
    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textInputContainer:{
        padding: 10
    },
    buttom:{
        marginLeft: '85%',
        alignItems: 'center'
    }
})