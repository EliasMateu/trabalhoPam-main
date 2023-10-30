import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Button from "../../../components/ButtonGeral";
import PickerList from "../../../components/Picker";
import style from "./style";

export default function Altura({ route, navigation }) {
    const [alturaVisible, setAlturaVisible] = useState(false);

    function openIdade(idade) {
        navigation.navigate("Idade", idade);
    }

    function openalturalist() {
        setAlturaVisible(!alturaVisible);
    }

    return (
        <View style={style.container}>
            <View style={{ gap: 35 }}>
                <Text style={style.textPrin}>
                    Informe a sua altura:
                </Text>
                <TouchableOpacity onPress={openalturalist} style={style.btnInformacao}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        ALTURA
                    </Text>
                </TouchableOpacity>
            </View>

            {alturaVisible && (
                <ScrollView style={{ maxHeight: 150 }}>
                    <PickerList type={"altura"}/>
                </ScrollView>
            )}

            <View>
                <Button
                    type={"primary"}
                    onPress={openIdade}
                    text={"Avançar"}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
