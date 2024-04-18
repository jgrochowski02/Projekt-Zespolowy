import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import StackNav from "./src/navigation/Stack";
import DrawerNav from "./src/navigation/Drawer";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <DrawerNav />
      </PaperProvider>
    
    </NavigationContainer>
  );
}
