import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/ButtonGeral";

import style from "./style";

export default function FotoPerfil({ route, navigation }) {
    function openMetas (metas){
        navigation.navigate("Metas", metas);
    }
    return (
        <View style={style.container}>
            <View style={{ gap: 35 }}>
                <Text style={style.textPrin}>
                    Agora, adicione uma {'\n'}
                    foto:
                </Text>
                <TouchableOpacity style={style.btnInformacao}>
                    <Text style={{ fontSize: 20 }}>
                        Selecione o
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        arquivo
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8}}>
                <Text style={style.txtEtapa}>
                   Ou pular para a próxima etapa
                </Text>
            </View>

            <View>
                <View>
                    <Button
                    type={"primary"}
                    onPress={openMetas}
                    text={"Avançar"} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}