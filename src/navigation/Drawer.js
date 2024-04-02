import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu,Home } from "../views";

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>

    );
}