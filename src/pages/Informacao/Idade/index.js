import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/ButtonGeral";

import style from "./style";

export default function Idade({ route, navigation }) {
    function openFotoPerfil(fotoPerfil) {
        navigation.navigate("FotoPerfil", fotoPerfil);
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35 }}>
                <Text style={style.textPrin}>
                    Informe a sua Idade:
                </Text>
                <TouchableOpacity style={style.btnInformacao}>
                    <Text style={{ fontSize: 20 }}>
                        IDADE
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Button
                    type={"primary"}
                    onPress={openFotoPerfil}
                    text={"Avançar"} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}