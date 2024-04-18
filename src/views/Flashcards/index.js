import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles } from "../styles";
import { Search, DeckAdd, Edit, Remove } from "../icons";
import { languagesArr } from "../Flashcards/languages";
import { useEffect } from "react";

export function Flashcards({ navigation }) {
  console.log(languagesArr);
  const [hasToRerender, setHasToRerender] = useState(false);

  useEffect(() => {
    console.log("haslogfok");
  }, [hasToRerender]);

  return (
    <>
      {languagesArr.map((language, index) => (
        <Swipeable
          key={index}
          style={styles.list}
          renderLeftActions={() => (
            <TouchableOpacity style={styles.leftAction} onPress={() => {}}>
              <Edit />
            </TouchableOpacity>
          )}
          renderRightActions={() => (
            <TouchableOpacity
              style={styles.rightAction}
              onPress={() => {
                languagesArr.splice(index, 1);
                setHasToRerender(!hasToRerender);
              }}
            >
              <Remove />
            </TouchableOpacity>
          )}
        >
          <TouchableOpacity
            style={styles.flatCard}
            onPress={() =>
              navigation.navigate("Fiszka", {
                deck: language.deck,
              })
            }
          >
            <Text style={styles.deckTitle}>{language.title}</Text>
            <Text style={styles.deckBody}>{language.cards}</Text>
          </TouchableOpacity>
        </Swipeable>
      ))}
    </>
  );
}
export default Flashcards;
