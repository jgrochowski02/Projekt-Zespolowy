import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text }) => {
    return (
      <TouchableOpacity style={styles.rectangle} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 150,
    height: 100,
    backgroundColor: '#4A83CF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton;
