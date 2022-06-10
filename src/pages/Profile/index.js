import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'

import Nickname from '../Nickname';
import Conflict from './conflicts';
import Interaction from './interactions';

export default function Profile() {
    return (
        <View style={styles.tela}>

            <View style={styles.containerNickname}>
                <Text style={styles.text}>meu_apelido</Text>
            </View>

            <View style={styles.containerConflicts}>
                
                <Text style={styles.subDescription}>Meus Conflitos</Text>
                <Text style={styles.subDescription}>_______________________________________________________</Text>

                <ScrollView>
                    <Conflict />
                    <Conflict />
                </ScrollView>
                
            </View>

            <View style={styles.containerInteractions}>
                
                <Text style={styles.subDescription}>Minhas Interações</Text>
                <Text style={styles.subDescription}>_______________________________________________________</Text>

                <ScrollView>
                    <Interaction />
                    <Interaction />
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        padding: 15,
        flex:1,
        justifyContent: 'top'
    },
    containerNickname:{
        margin: 5,
        padding: 20,
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerConflicts:{
        margin: 5,
        padding: 20,
        flex:1,
        justifyContent: 'top',
    },
    containerInteractions:{
        margin: 5,
        padding: 20,
        flex:1,
        justifyContent: 'top',
    },
    subDescription:{
        fontSize: 12,
        color: 'gray'
    },

    interactions:{
        marginTop: 10,
        padding:15,
        flex:0.1,
        justifyContent: 'top',
        borderRadius: 10,
        backgroundColor: '#DCDEDD'

    },

})