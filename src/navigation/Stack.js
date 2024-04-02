import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../views";


const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
         <Stack.Navigator>
             <Stack.Screen name="Home" component={Home} options={optionScreen} />
         </Stack.Navigator>

    );
}