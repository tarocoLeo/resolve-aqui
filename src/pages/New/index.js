import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Controller } from 'react-hook-form';
export default function New() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState(['Emprego', 'Família', 'Amor']);

    const post = () => {
        alert('publicado')
    }
    return (
        <View style={styles.forms}>
            <View style={styles.container}>
                <Text style={styles.title}>Título</Text>
                    <TextInput style={styles.titleInput} onChangeText={text=>setTitle(text)}/>
                    <Text style={styles.subDescription}>digite o assunto do tema abordado</Text>
                    <Text style={styles.subDescription}>_______________________________________________________________</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Descrição</Text>
                <TextInput 
                    style={styles.descriptionInput}
                    multiline={true}
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={text=>setDescription(text)}
                />
                <Text style={styles.subDescription}>sinta-se à vontade para descrever a situação</Text>
                <Text style={styles.subDescription}>_______________________________________________________________</Text>
            </View>

            <View style={styles.positionBottom}>               
                <View style={styles.buttom}>
                    <TouchableOpacity onPress={()=>post()}>
                        <View style={{alignItems:'center'}}>
                            <Image style={{width:20,height:20, marginBottom:10}} source={require('../../../assets/images/ok_button.png')} />
                            <Text  style={{color: 'gray'}}>Salvar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>     
    );
}

const styles = StyleSheet.create({
    forms:{
        padding: 15,
        flex:1,
        justifyContent: 'top'
    },
    container:{
        padding: 15,
        flex:-1,
        justifyContent: 'top',
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    titleInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10,
    },
    descriptionInput:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        marginBottom:10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    subDescription:{
        fontSize: 11,
        color: 'gray',
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    buttom:{
        width:40,
        height: 40
    },
    positionBottom:{
        marginLeft: '85%'
    },
    titleInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10,
    },
})