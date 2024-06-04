import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import FlipCard from "react-native-flip-card";
import { questions } from "../Flashcards/questions";
import { useRoute } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";

export default function Flashcard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
    <View style={styles.view}>
      <FlipCard
        style={styles.flipCard}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View style={styles.flipSide}>
          <Text style={styles.face}>
            {questionList[currentQuestionIndex].ask}
          </Text>
        </View>
        <View style={styles.flipSide}>
          <Text style={styles.back}>
            {questionList[currentQuestionIndex].answer}
          </Text>
        </View>
      </FlipCard>
    </View>
  );

  return (
    <>
      <Swiper
        style={{}}
        ref={(swiper) => {
          this.swiper = swiper;
        }}
        cards={cards}
        renderCard={renderCard}
        backgroundColor="transparent"
        onSwiped={(cardIndex) => {
          setCurrentQuestionIndex(cardIndex + 1);
        }}
        overlayLabels={{
          left: {
            title: "NOT YET",
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
          },
          right: {
            title: "GOT IT",
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
          },
        }}
      ></Swiper>
    </>
  );
}
