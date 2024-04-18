import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../views/Home/index";
import History from "../views/History/index";
import Flashcards from "../views/Flashcards/index";
import Description from "../views/Description";
import flashcard from "../views/Flashcards/flashcard";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Flashcards" component={Flashcards} />
      <Drawer.Screen name="Description" component={Description} />
      <Drawer.Screen name="Fiszka" component={flashcard} />
    </Drawer.Navigator>
  );
}
