import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {
    const [fontsLoaded] = useFonts({
        'Satoshi-Bold': require('../assets/fonts/Satoshi-Bold.otf'),
        'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
        'Satoshi-Medium': require('../assets/fonts/Satoshi-Medium.otf'),
        'Satoshi-LightItalic': require('../assets/fonts/Satoshi-Medium.otf') 
    });

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/logo_Senai.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                    Monitore e organize seus recursos didáticos de qualquer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#880000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        fontFamily: 'Satoshi-Regular',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        fontFamily: 'Satoshi-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        color: "#FFF"
    },
    text: {
        color: '#fff',
        fontFamily: 'Satoshi-Regular',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        fontFamily: 'Satoshi-Bold',
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#880000',
        fontWeight: 'bold'
    }
})
