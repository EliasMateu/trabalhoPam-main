import React, { useState } from 'react';
import { SectionList, StatusBar, Text, View, TouchableOpacity } from "react-native";
import style from "../style.js";

export default function PesoList() {
  const ListOne = [
    {
      data: [
        { id: 1, goal: "1 refeição" },
        { id: 2, goal: "2 refeição" },
        { id: 3, goal: "3 refeição" },
        { id: 4, goal: "4 ou mais refeições" },
      ],
    },
  ];

  // Estado para armazenar o objetivo selecionado
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Função para selecionar um objetivo
  const selectGoal = (id) => {
    setSelectedGoal(id);
  };

  return (
    <View>
      <View>
        <SectionList
          sections={ListOne}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={style.item}>
              <TouchableOpacity
                // Estiliza o botão com base no objetivo selecionado
                style={[
                  style.button,
                  selectedGoal === item.id ? { backgroundColor: "#3AA75F" } : null,
                ]}
                onPress={() => selectGoal(item.id)} // Ao pressionar, seleciona o objetivo
              >
                <Text style={style.title}>{item.goal}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={style.header}>{title}</Text>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
