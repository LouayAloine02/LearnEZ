import React from "react";
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { addMatiereStyle } from "./addMatiereStyle";


export default class addMatiere extends React.Component {
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
                            <Appbar.BackAction onPress={() => this.props.navigation.navigate("managingModules")} />
                        </Appbar>
                        <View style={addMatiereStyle.content}>
                            <TextInput label="Name of module" />


                            <Button mode="contained" style={addMatiereStyle.button}>Add</Button>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}