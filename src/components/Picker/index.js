import { View, FlatList, Text } from "react-native";

export default function PickerList({ type }) {
  const data = [];

  switch (type) {
    case "altura":
      for (let i = 0; i <= 300; i++) {
        const valor = (i / 100).toFixed(2);
        data.push(`${valor} m`);
      }
      break;
    case "peso":
      for(let i =0; i <= 180; i++) {
        data.push(`${i} kg`);
      }
      break;
    case "idade":
      for (let i = 0; i < 120; i++) {
        data.push(`${i} anos`);
      }
    default:
      break;
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
};