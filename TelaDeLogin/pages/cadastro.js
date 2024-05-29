import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = async () => {
        const newUser = { nome, email, senha };
        try {
            const storedValue = await AsyncStorage.getItem('users');
            const users = storedValue ? JSON.parse(storedValue) : [];
            users.push(newUser);
            await AsyncStorage.setItem('users', JSON.stringify(users));
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
                { text: 'OK', onPress: () => navigation.navigate('Entrada') }
            ]);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar o cadastro.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                placeholder='Nome'
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#880000',
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
});

export default Cadastro;
