import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { PaperProvider } from "react-native-paper"

import StackNav from "./src/navigation/Stack";
import DrawerNav from "./src/navigation/Drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <PaperProvider>
        <DrawerNav />
        
    </PaperProvider>
</NavigationContainer>
  );
}
