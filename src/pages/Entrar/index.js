import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image } from "react-native";
import ButtonGeral from "../../components/ButtonGeral";

import style from "./style";

export default function Entrar({ route, navigation }) {
  function openRegister(register) {
    navigation.navigate("Register", register);
  }
  function openHome(home) {
    navigation.navigate("Home", home);
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
          onPress={openHome}
          text="Entrar" 
          type={"primary"}/>
        <Text style={{ color: "#fff", fontSize: 20 }}>ou</Text>
        <ButtonGeral
          onPress={openRegister}
          text="Cadastrar-se" 
          type={"primary"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
