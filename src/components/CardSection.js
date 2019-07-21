import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={styles.ContainerStyle}>
    {props.children}
  </View>
);


const styles = {
  ContainerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
  },
};

export default CardSection;
