import {View, FlatList, Text} from "react-native";

export default function PickerList({}){

  const data = [];
  for (let i = 0; i < 300; i++) {
    const value = (i / 100).toFixed(2);
    data.push(`${value} cm`);
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