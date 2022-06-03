import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Controller } from 'react-hook-form';

export default function New() {
    const { control, handleSubmit, formState: { errors} } = useForm({})

    function handleSignIn(data){
        console.log(data);
    }

    return (
        <View style={styles.tela}>
            <View style={styles.container}>
                <Text style={styles.title}>Título</Text>

                <Controller
                    control={control}
                    name="titulo"
                    render={({ field: {onChange, onBlur, value} }) =>(
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <Text style={styles.subtitle}>digite o assunto do tema abordado</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Descrição</Text>

                <Controller
                    control={control}
                    name="titulo"
                    render={({ field: {onChange, onBlur, value} }) =>(
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <Text style={styles.subtitle}>sinta-se à vontade para descrever a situação</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Categoria</Text>

                <Controller
                    control={control}
                    name="titulo"
                    render={({ field: {onChange, onBlur, value} }) =>(
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <Text style={styles.subtitle}>selecione uma categoria relacionada</Text>
            </View>
        
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                    <Text  style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        padding: 15,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        padding: 15,
        flex:1,
        justifyContent: 'top',
        alignItems: 'center'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10
    },
    input:{
        height: 50,
        backgroundCollor: '#000',
        borderColor: '#000',
        borderRadius: 30
    },
    buttonText:{
        justifyContent: 'bottom'
    }
})