import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Conflict(){
    return(
        <View style={styles.conflict}>
            <Text style={styles.title}>Título do conflito</Text>
            <Text style={styles.conflictAuthor}>Joãozinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
