import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Podaj słowo"
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center'
  },
  input: {
    
    height: 40,
    paddingHorizontal: 5,
  },
});

export default CustomTextInput;
