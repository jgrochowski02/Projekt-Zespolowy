import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LOGOImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../public/Dictionary.png')} // Ścieżka do twojego zdjęcia
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '40%',
    marginBottom: '20%'

  },
  image: {
    width: 300, 
    height: 300, 
  },
});

export default LOGOImage;
