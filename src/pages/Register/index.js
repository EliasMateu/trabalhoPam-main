import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ButtonGeral from "../../components/ButtonGeral";
import TextInputs from  "../../components/Inputs";
import Texts from "../../components/Texts";

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
          
        </View>
        <Texts type={"Titulos"}>
            Criar conta
          </Texts>
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
          }}
        >
          <View>
          <TextInputs placeholder={"Nome Completo"}/>
          </View>
          <View>
          <TextInputs placeholder={"E-mail"}/>
          </View>
          <View>
          <TextInputs placeholder={"Celular"}/>
          </View>
          <View>
          <TextInputs placeholder={"Senha"}/>
          </View>
          
          
        </View>
        <View
          style={{
            width: "80%",
            height: 2,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        ></View>
        <View style={style.checkView}>
          <BouncyCheckbox
            onPress={() => {}}
            text="Li os termos e aceito as condições de uso do aplicativo"
          />
        </View>
        <View style={style.checkView}>
          <BouncyCheckbox
            onPress={() => {}}
            text="Aceito receber promoções e novidades no e-mail"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <ButtonGeral
          onPress={openInformacao}
          text={"Avançar"} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
