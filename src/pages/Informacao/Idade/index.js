import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Button from "../../../components/ButtonGeral";
import PickerList from "../../../components/Picker";
import style from "./style";
import { useState } from "react";

export default function Idade({ route, navigation }) {
    const [idadeVisible, setIdadeVisible] = useState(false);

    function openFotoPerfil(fotoPerfil) {
        navigation.navigate("FotoPerfil", fotoPerfil);
    }

    function openIdadeList() {
        setIdadeVisible(!idadeVisible);
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35 }}>
                <Text style={style.textPrin}>
                    Informe a sua Idade:
                </Text>
                <TouchableOpacity onPress={openIdadeList} style={style.btnInformacao}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        IDADE
                    </Text>
                </TouchableOpacity>
            </View>

            {idadeVisible && (
                <ScrollView style={{ maxHeight: 150 }}>
                    <PickerList type={"idade"}/>
                </ScrollView>
            )}
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