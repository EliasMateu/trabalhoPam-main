import { StyleSheet, Text } from "react-native";

export default function texts({ type, text}) {

    let selected = '';

    switch (type) {
        case "Titulos":
            selected = style.Titulos;
            break;
        case "sobTitulo":
            selected = style.sobTitulo;
            break;
        default:
            break;
    }
    
    const textType = selected;
    return (
        <Text style={textType}>
            {text}
        </Text>
    );
}
const style = StyleSheet({
    Titulos: {
        fontSize: 44,
        color: "#FFF",
        fontWeight: "bold"
    },
    sobTitulo:{
        fontSize: 24,
    },
})