import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNav from "./src/navigation/Stack";
import DrawerNav from "./src/navigation/Drawer";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName="StackNav" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Home" component={StackNav} />
                <Drawer.Screen name="Menu" component={DrawerNav} />
            </Drawer.Navigator>
      </NavigationContainer>
  );
}