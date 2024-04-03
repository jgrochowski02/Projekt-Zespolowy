import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../views/Home/index';
import History from '../views/History/index';
import Flashcards from '../views/Flashcards/index';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="Flashcards" component={Flashcards} />
        </Drawer.Navigator>

    );
}