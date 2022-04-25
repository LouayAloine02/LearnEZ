import React from 'react';
import { View, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './loginStyle';

export default class LoginScreenEns extends React.Component {
    render() {

        return (
            <ImageBackground
                source={require('../images/backgroundAccueil.jpg')}
                style={{ width: "100%", height: "100%" }}
            >


                <SafeAreaView style={loginStyle.content}>
                    <View style={loginStyle.View}>
                        <Card >
                            <Card.Content>
                                <Card.Title title="Welcome to Learn EZ" titleStyle={loginStyle.cardTitle}></Card.Title>
                                <TextInput label="Email" keyboardType='"email-address' ></TextInput>
                                <TextInput label="Password" secureTextEntry={true} ></TextInput>
                                <Button uppercase={false}>Forget email/password</Button>
                                <Button mode="contained" onPress={() => this.props.navigation.navigate("roleEns")}>Login</Button>
                                <Button onPress={() => this.props.navigation.navigate("register")}>Register</Button>
                            </Card.Content>

                        </Card>
                    </View>
                </SafeAreaView>
            </ImageBackground >

        )
    }
}