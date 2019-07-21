import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => (
  <View style={styles.ContainerStyle}>
    {props.children}
  </View>
);


const styles = StyleSheet.create({
  ContainerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
  },
});

export default CardSection;
