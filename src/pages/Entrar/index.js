import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image } from "react-native";
import ButtonGeral from "../../components/ButtonGeral/index";

import style from "./style";

export default function Entrar({ route, navigation }) {
  function openRegister(register) {
    navigation.navigate("Register", register);
  }
  return (
    <View style={style.container}>
      <View>
        <Image
          source={require("../../../assets/Logo.png")}
          style={style.logo}
        />
      </View>
      <View style={style.container}>
        <Text style={{ color: "#fff", fontSize: 40, marginTop: 42 }}>
          Nutrição sobre
        </Text>
        <Text style={{ color: "#fff", fontSize: 40, marginBottom: 72 }}>
          medida
        </Text>
        <ButtonGeral
          onPress={"#"}
          text="Entrar" />
        <Text style={{ color: "#fff", fontSize: 20 }}>ou</Text>
        <ButtonGeral
          onPress={openRegister}
          text="Cadastrar-se" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
