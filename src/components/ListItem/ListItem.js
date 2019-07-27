import React from 'react';
import {
  Text, StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from '../common';
import * as actions from '../../redux/actions';


const ListItem = (props) => {
  const { title, id, description } = props.library.item;
  const { selectedLibraryId } = props;
  const { titleStyle } = styles;
  //   console.log(description);
  console.log(selectedLibraryId);

  function renderDescription() {
    if (id === selectedLibraryId) {
      return (<Text>{description}</Text>);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => props.selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 13,
    paddingLeft: 15,

  },
});

const mapStateProps = state => ({
  selectedLibraryId: state.selectedLibraryId.selectedId,
});


export default connect(mapStateProps, actions)(ListItem);
