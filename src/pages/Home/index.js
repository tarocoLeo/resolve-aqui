import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import Conflict from './conflicts';

export default function Home() {
    
    const [search, setSearch] = useState('');
    

    return (
        <View style={styles.tela}>

            <View style={styles.containerSearch}>
                <Text style={styles.conflictAuthor}>Pesquisar</Text>
                <TextInput style={styles.searchInput} onChangeText={text=>setSearch(text)}/>
            </View>

            <View style={styles.containerConflicts}>
                <ScrollView>
                    <Conflict />
                    <Conflict />
                    <Conflict />
                    <Conflict />
                </ScrollView>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        padding: 15,
        flex:1,
        justifyContent: 'top',
    },
    containerSearch:{
        padding: 20,
    },
    searchInput:{
        width:'100%',
        height:40,
        backgroundColor:'#DCDEDD',
        borderRadius:10,
        padding:10,
    },
    containerConflicts:{
        padding:15,
        flex:1,
        justifyContent: 'top',
    },
    conflict:{        
        padding:15,
        flex:0.1,
        justifyContent: 'top',
        borderRadius: 10,
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    conflictAuthor:{
        fontSize: 14,
        paddingBottom: 10,
        color:'gray'
    }

})