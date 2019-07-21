import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ onPress, children }) => {
  const { ButtonStyle, TextStyle } = styles;


  return (
    <TouchableOpacity style={ButtonStyle} onPress={onPress}>
      <Text style={TextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  TextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
