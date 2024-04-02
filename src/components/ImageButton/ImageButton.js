import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const ImageButton = ({ onPress, imageSource, buttonText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.buttonContent}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A83CF',
    borderRadius: 10,
    padding: 10,
  },
  buttonContent: {
    justifyContent: 'space-around',
    
  },
  image: {
    width: 40,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageButton;