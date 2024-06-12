import { View, Text, Button, FlatList } from "react-native";
import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import styles2 from "./resultsStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Results() {
  const navigation = useNavigation();
  const route = useRoute();
  const { correctAnswers, wrongAnswers } = route.params;

  return (
    <View style={styles2.container}>
      <Text style={styles2.resultTitle}>Wynik</Text>
      <Text style={styles2.resultText1}>Poprawne: {correctAnswers.length}</Text>
      <Text style={styles2.resultText2}>Błędne: {wrongAnswers.length}</Text>

      <Text style={styles2.resultTitle}>Poprawne odpowiedzi</Text>
      <FlatList
        data={correctAnswers}
        renderItem={({ item }) => (
          <Text style={styles2.resultText}>{item.answer}</Text>
        )}
        keyExtractor={(item) => item.answer.toString()}
      />

      <Text style={styles2.resultTitle}>Błędne odpowiedzi</Text>
      <FlatList
        data={wrongAnswers}
        renderItem={({ item }) => (
          <Text style={styles2.resultText}>{item.answer}</Text>
        )}
        keyExtractor={(item) => item.answer.toString()}
      />

      <TouchableOpacity
        style={styles2.button}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles2.buttonContent}>
          <Text style={styles2.text}>Wróc do menu głównego</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
