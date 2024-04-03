import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../views/MainScreen';
import History from '../views/History';
import Flashcards from '../views/Flashcards';
import Description from '../views/Description';

const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
         <Stack.Navigator>
             <Stack.Screen name="MainScreen" component={MainScreen} options={optionScreen} />
             <Stack.Screen name="History" component={History} options={optionScreen} />
             <Stack.Screen name="Flashcards" component={Flashcards} options={optionScreen} />
             <Stack.Screen name="Description" component={Description} options={optionScreen} />
         </Stack.Navigator>

    );
}