import { StyleSheet, TextInput, View } from "react-native";

export default function Txtinput({ placeholder,
    disabled,
    type }) {

    const txtinputVar = {
        active: {
            width: 349,
            height: 53,
            color: '#B4B4B4',
            marginBottom: 32,
            paddingLeft: 15,
            borderRadius: 20,
            fontSize: 24,
        },
        inactive: {
            width: 349,
            height: 53,
            backgroundColor: "#000",
            marginBottom: 32,
            paddingLeft: 15,
            borderRadius: 20,
            fontSize: 24,
        }
    }

    const txtinputStyle = disabled ? txtinputVar.inactive : txtinputVar.active;

    let selected = '';

    switch (type) {
        case "primary":
            selected = style.primary;
            break;
        default:
            selected = txtinputStyle.inactive;
            break;
    }

    const textInputStyle = selected;
    return (
        <TextInput style={[textInputStyle, txtinputStyle]} placeholder={placeholder}></TextInput>
    );
}

const style = StyleSheet.create({
    primary: {
        backgroundColor: '#fff',
    },
});