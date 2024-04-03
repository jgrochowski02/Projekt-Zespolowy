import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from '../views/MainScreen/index';
import History from '../views/History/index';
import Flashcards from '../views/Flashcards/index';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainScreen} />
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="FlashCards" component={Flashcards} />
        </Drawer.Navigator>

    );
}