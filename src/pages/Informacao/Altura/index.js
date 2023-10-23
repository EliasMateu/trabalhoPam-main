import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/ButtonGeral";

import style from "./style";

export default function Altura({ route, navigation }) {
    function openIdade(idade) {
        navigation.navigate("Idade", idade);
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35 }}>
                <Text style={style.textPrin}>
                    Informe a sua altura:
                </Text>
                <TouchableOpacity style={style.btnInformacao}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        ALTURA
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Button
                    onPress={openIdade}
                    text={"Avançar"} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}