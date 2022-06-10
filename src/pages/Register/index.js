import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Controller } from 'react-hook-form';

export default function Register() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const cadastro = () => {
        alert('cadastrado')
    }

    return (
        <View style={styles.container}>
        <Image style={{width:180,height:180}} source={require('../../../assets/images/logo.png')} />
            <Text style={styles.description}>Seu melhor email:</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setEmail(text)}/>

            <Text style={styles.description}>Crie uma senha:</Text>
            <TextInput secureTextEntry={true} placeholder="Crie uma senha" style={styles.textInput} onChangeText={text=>setPassword(text)}/>

            <TouchableOpacity onPress={()=>cadastro()}>
                <View style={{alignItems:'center'}}>
                    <Image style={{width:30,height:30}} source={require('../../../assets/images/ok_button.png')} />
                    <Text  style={styles.buttonText}>Cadastrar</Text>
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
        padding: 5
    }
});