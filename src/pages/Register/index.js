import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ButtonGeral from "../../components/ButtonGeral";
import Txtinput from "../../components/TxtInput";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import style from "./style";

export default function Register({ route, navigation }) {
  function openInformacao(informacao) {
    navigation.navigate("Informacao", informacao);
  }
  return (
    <View style={style.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={style.txtTitulo}>
            Criar conta
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            height: 2,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            alignItems: "center",
            paddingBottom: 30,
            paddingTop: 30,
          }}>
          <View>
            <Txtinput placeholder={"Nome Completo"} type={"primary"} />
          </View>
          <View>
            <Txtinput placeholder={"Nome e-mail"} type={"primary"} />
          </View>
          <View>
            <Txtinput placeholder={"Celular"} type={"primary"} />
          </View>
          <View>
            <Txtinput placeholder={"Senha"} type={"primary"} />
          </View>
        </View>
        <View
          style={{
            width: "80%",
            height: 2,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}>
        </View>
        <View style={style.checkView}>
          <BouncyCheckbox
            onPress={() => { }}
            text="Li os termos e aceito as condições de uso do aplicativo"
          />
        </View>
        <View style={style.checkView}>
          <BouncyCheckbox
            onPress={() => { }}
            text="Aceito receber promoções e novidades no e-mail"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <ButtonGeral
            onPress={openInformacao}
            text={"Avançar"}
            type={"primary"} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
