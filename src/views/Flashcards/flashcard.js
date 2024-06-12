import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import FlipCard from "react-native-flip-card";
import { questions } from "../Flashcards/questions";
import { useRoute, useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";

export default function Flashcard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const navigation = useNavigation();

  let questionList = Object.values(questions[0].pl.questions);
  const { deck } = useRoute().params;
  switch (deck) {
    case "Polskie":
      questionList = Object.values(questions[0].pl.questions);
      break;
    case "English":
      questionList = Object.values(questions[0].en.questions);
      break;
    case "Deutsch":
      questionList = Object.values(questions[0].de.questions);
      break;
    case "Français":
      questionList = Object.values(questions[0].fr.questions);
      break;
    case "Español":
      questionList = Object.values(questions[0].es.questions);
      break;
    case "Italiano":
      questionList = Object.values(questions[0].it.questions);
      break;
  }

  const cards = questionList.map((question, index) => ({
    question: question.ask,
    answer: question.answer,
    id: index,
  }));

  const renderCard = (card) => (
    <View style={styles.cardContainer}>
      <FlipCard
        style={styles.flipCard}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View style={styles.flipSide}>
          <Text style={styles.face}>{questionList[card.id].ask}</Text>
        </View>
        <View style={styles.flipSide}>
          <Text style={styles.back}>{questionList[card.id].answer}</Text>
        </View>
      </FlipCard>
    </View>
  );

  const handleSwipe = (cardIndex, direction) => {
    const updatedCorrectAnswers = [...correctAnswers];
    const updatedWrongAnswers = [...wrongAnswers];

    console.log(direction);
    if (direction === "right") {
      updatedCorrectAnswers.push(questionList[cardIndex]);
      setCorrectAnswers(updatedCorrectAnswers);
    } else if (direction === "left") {
      updatedWrongAnswers.push(questionList[cardIndex]);
      setWrongAnswers(updatedWrongAnswers);
    }

    if (cardIndex === cards.length - 1) {
      console.log("Navigating to Results with:", {
        correctAnswers: updatedCorrectAnswers,
        wrongAnswers: updatedWrongAnswers,
      });
      // All cards have been swiped, navigate to results screen with the latest state
      navigation.navigate("Results", {
        correctAnswers: updatedCorrectAnswers,
        wrongAnswers: updatedWrongAnswers,
      });
    } else {
      setCurrentQuestionIndex(cardIndex + 1);
    }
  };

  return (
    <>
      <Swiper
        ref={(swiper) => {
          this.swiper = swiper;
        }}
        cards={cards}
        renderCard={renderCard}
        backgroundColor="transparent"
        onSwipedLeft={(cardIndex) => handleSwipe(cardIndex, "left")}
        onSwipedRight={(cardIndex) => handleSwipe(cardIndex, "right")}
        overlayLabels={{
          left: {
            title: "Nie wiem :(",
            style: {
              label: {
                backgroundColor: "red",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
            marginLeft: -30,
          },

          right: {
            title: "Znam to!",
            style: {
              label: {
                backgroundColor: "green",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
            marginLeft: 30,
          },
        }}
      />
    </>
  );
}
