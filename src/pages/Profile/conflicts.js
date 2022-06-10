import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Conflict(){
    return(
        <View style={styles.conflicts}>
            <Text style={styles.title}>Título do conlito</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conflicts:{
        marginTop: 10,
        padding:15,
        flex:0.2,
        justifyContent: 'top',
        borderRadius: 10,
        backgroundColor: '#DCDEDD'
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10
    }
})
