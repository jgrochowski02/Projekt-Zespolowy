import {StyleSheet, Button, Text, View, image } from 'react-native';
import CustomButton from '../../components/Rectangle/Rectangle';
import Header from '../../components/Header/Header';
import ImageButton from '../../components/ImageButton/ImageButton';
import CustomTextInput from '../../components/TextInput/TextInput';
import LOGOImage from '../../components/LOGOImage/LOGOImage';
import styles from '../../utils/styles';



export function Home({ navigation }) {
   
    const handlePress = () => {
        console.log('Przycisk został kliknięty!');
      };

    return (
      
      <View style={styles.container}>
           
            <View>
               <Header/>
               <LOGOImage/>
            </View>

            <View style={{marginTop: '10%', flexDirection: 'row', justifyContent: 'space-around' }}>
           <CustomButton text="Historia"/>
           <CustomButton text="Ulubione"/>
        </View>
        
        <View style={{marginTop: '10%', marginBottom: '1%', flexDirection: 'row', justifyContent: 'space-around' }}>
           
           <ImageButton
        onPress={handlePress}
        imageSource={require('../../../public/Poland.png')}
      />
       <ImageButton
        onPress={handlePress}
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
