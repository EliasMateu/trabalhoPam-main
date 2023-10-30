import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Button from "../../../components/ButtonGeral";
import PickerList from "../../../components/Picker";
import style from "./style";
import { useState } from "react";

export default function Peso({ route, navigation }) {
    const [pesoVisible, setPesoVisible] = useState(false);

    function openAltura(altura) {
        navigation.navigate("Altura", altura);
    }

    function openPesoList() {
        setPesoVisible(!pesoVisible)
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35, alignItems: 'center' }}>
                <Text style={style.textPrin}>
                    Agradecemos o cadastro! {"\n"}
                    Para começarmos, {"\n"}
                    informe seu peso:
                </Text>
                <TouchableOpacity onPress={openPesoList} style={style.btnInformacao}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        PESO
                    </Text>
                </TouchableOpacity>
                {pesoVisible && (
                    <ScrollView style={{ maxHeight: 150 }}>
                        <PickerList type={"peso"} />
                    </ScrollView>
                )}
                <View style={{ marginTop: 32 }}>
                    <Button
                        type={"primary"}
                        onPress={openAltura}
                        text={"Avançar"} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}