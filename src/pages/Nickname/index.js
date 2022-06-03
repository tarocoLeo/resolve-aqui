import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Controller } from 'react-hook-form';

export default function Nickname() {
    const { control, handleSubmit, formState: { errors} } = useForm({})

    function handleSignIn(data){
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
            <Text style={styles.welcome}>Seja bem vindo!</Text>
            <Text style={styles.title}>Digite seu nickname</Text>

            <Controller
                control={control}
                name="nickname"
                render={({ field: {onChange, onBlur, value} }) =>(
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Ex: joaozinho123"
                    />
                )}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                <Text  style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 75,
        flex:1,
        justifyContent: 'top',
        alignItems: 'center'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10
    },
    welcome:{
        fontSize: 40,
        fontWeight: 'Poppins',
        color: '#1C63F5'
    },
    input:{
        height: 50,
        backgroundCollor: '#000',
        borderColor: '#000',
        borderRadius: 30
    },
    logo:{
        width: 180,
        height: 180
    },
    buttonText:{
    }

})