import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Pagina Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})