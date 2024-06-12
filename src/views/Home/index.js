import {StyleSheet, Button, Text, View, image } from 'react-native';
import CustomButton from '../../components/Rectangle/Rectangle';
import Header from '../../components/Header/Header';
import ImageButton from '../../components/ImageButton/ImageButton';
import CustomTextInput from '../../components/TextInput/TextInput';
import LOGOImage from '../../components/LOGOImage/LOGOImage';
import styles from '../../utils/styles';
import History from '../History';
import Flashcards from '../Flashcards';
import Description from '../Description';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home({ navigation }) {
   
    const handlePressHistory = () => {
      navigation.navigate('History');
      };

      const handlePressFlashcards = () => {
        navigation.navigate('Flashcards');
        };

        const handlePressDescription = () => {
          navigation.navigate('Description');
          };

    return (
      
      <View style={styles.container}>
           
            <View>
               <Header/>
               <LOGOImage/>
            </View>

            <View style={{marginTop: '10%', flexDirection: 'row', justifyContent: 'space-around' }}>
           {/* <CustomButton text="Historia" onPress={handlePressHistory}/> */}
           <CustomButton text="Fiszki" onPress={handlePressFlashcards}/>
        </View>
        <CustomTextInput/>
        <View style={{marginTop: '2%', marginBottom: '1%', flexDirection: 'row', justifyContent: 'space-around' }}>
           
           <ImageButton
        imageSource={require('../../../public/poland1.png')}
        />
       <ImageButton
        imageSource={require('../../../public/united-kingdom1.png')}
      />
        </View>
       

<TouchableOpacity style={styles.button} onPress={handlePressDescription}>
  <View style={styles.buttonContent}>
  <Text style={styles.text}>Szukaj</Text>
    </View>
</TouchableOpacity>

       
        </View>
    );
};

export default Home
