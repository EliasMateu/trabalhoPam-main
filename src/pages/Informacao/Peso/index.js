import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/ButtonGeral";

import style from "./style";

export default function Peso({ route, navigation }) {
    function openAltura(altura) {
        navigation.navigate("Altura", altura);
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35, alignItems: 'center'}}>
                <Text style={style.textPrin}>
                    Agradecemos o cadastro! {"\n"}
                    Para começarmos, {"\n"}
                    informe seu peso:
                </Text>
                <TouchableOpacity style={style.btnInformacao}>
                    <Text style={{ fontSize: 20 }}>
                        PESO
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{marginTop: 32}}>
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