import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";


export default class registerScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Appbar>
                        <Appbar.BackAction onPress={() => this.props.navigation.navigate("loginEns")} />
                        <Appbar.Content title="Register" />
                    </Appbar>

                    <View style={registerStyle.content}>
                        <TextInput label="Name" />
                        <TextInput label="Email" keyboardType="email-address" />
                        <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" />} />
                        <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" />} />
                        <Button mode="contained" style={registerStyle.button}>Register</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}