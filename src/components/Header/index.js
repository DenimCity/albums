import React, { Fragment } from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';

const Header = ({ name }) => (

  <Fragment>
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {name}
      </Text>
    </View>
  </Fragment>
);


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});
export default Header;
