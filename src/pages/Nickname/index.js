import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Controller } from 'react-hook-form';

export default function Nickname() {
    
    const [nickname, setNickname] = useState('');

    const avança = () => {
        alert('nickname certo')
    }

    return (
        <View style={styles.container}>
            <Image style={{width:180,height:180}} source={require('../../../assets/images/logo.png')} />
            <Text style={styles.welcome}>Seja bem vindo!</Text>

            <Text style={styles.description}>Digite seu nickname</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setNickname(text)}/>
            <Text style={styles.subDescription}>essa informação será pública.</Text>

            <TouchableOpacity onPress={()=>avança()}>
                <View style={{alignItems:'center'}}>
                    <Image style={{width:30,height:30}} source={require('../../../assets/images/ok_button.png')} />
                    <Text  style={styles.buttonText}>Avançar</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
        paddingTop:80,
        paddingLeft:30,
        paddingRight:30,
        flex:1,
        justifyContent: 'top',
        alignItems: 'center'
    },
    welcome:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#116FF6'
    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        padding:10,    
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10
    },
    description:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 5,
    },
    subDescription:{
        fontSize: 11,
        color: 'gray',
        fontWeight: 'bold',
        paddingBottom: 10
    }
})