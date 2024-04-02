import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.rectangle}></View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: '100%',
    height: 20, 
    backgroundColor: 'black',
  },
});

export default Header;
