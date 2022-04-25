import React from "react";
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";


export default class registerScreen extends React.Component {
    render() {
        return (
            <ImageBackground

                source={require('../images/backgroundAccueil.jpg')}
                style={{
                    width: "100%", height: "100%"
                }}>
                <SafeAreaView>
                    <ScrollView >
                        <Appbar>
                            <Appbar.BackAction onPress={() => this.props.navigation.navigate("managingEtd")} />
                        </Appbar>
                        <View style={registerStyle.content}>
                            <TextInput label="Name of student" />


                            <Button mode="contained" style={registerStyle.button} onPress={() => alert("Student deleted")}>Delete</Button>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}