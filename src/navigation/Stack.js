import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import History from "../views/History";
import Flashcards from "../views/Flashcards";
import Description from "../views/Description";
import flashcard from "../views/Flashcards/flashcard";

const Stack = createNativeStackNavigator();

const optionScreen = {
  headerShown: false,
};

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={optionScreen} />
      <Stack.Screen name="History" component={History} options={optionScreen} />
      <Stack.Screen
        name="Flashcards"
        component={Flashcards}
        options={optionScreen}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={optionScreen}
      />
      <Stack.Screen
        name="Fiszka"
        component={flashcard}
        options={optionScreen}
      />
    </Stack.Navigator>
  );
}
