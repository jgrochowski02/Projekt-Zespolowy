import {StyleSheet, Button, Text, View, image } from 'react-native';
import CustomButton from '../../components/Rectangle/Rectangle';
import Header from '../../components/Header/Header';
import ImageButton from '../../components/ImageButton/ImageButton';
import CustomTextInput from '../../components/TextInput/TextInput';
import LOGOImage from '../../components/LOGOImage/LOGOImage';
import styles from '../../utils/styles';
import History from '../History';
import Flashcards from '../Flashcards';

export function MainScreen({ navigation }) {
   
    const handlePressHistory = () => {
      navigation.navigate('History');
      };

      const handlePressFlashcards = () => {
        navigation.navigate('Flashcards');
        };

    return (
      
      <View style={styles.container}>
           
            <View>
               <Header/>
               <LOGOImage/>
            </View>

            <View style={{marginTop: '10%', flexDirection: 'row', justifyContent: 'space-around' }}>
           <CustomButton text="Historia" onPress={handlePressHistory}/>

           <CustomButton text="Fiszki" onPress={handlePressFlashcards}/>
        </View>
        
        <View style={{marginTop: '10%', marginBottom: '1%', flexDirection: 'row', justifyContent: 'space-around' }}>
           
           <ImageButton
        onPress={handlePressFlashcards}
        imageSource={require('../../../public/Poland.png')}
      />
       <ImageButton
        onPress={handlePressFlashcards}
        imageSource={require('../../../public/UK.png')}
      />
        </View>
        <CustomTextInput/>
        <Button
        title="Szukaj"
        color="#000000"
         />
       
       
        </View>
    );
};

export default MainScreen
