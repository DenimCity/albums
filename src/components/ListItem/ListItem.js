import React, { useEffect } from 'react';
import {
  Text, StyleSheet, TouchableWithoutFeedback, View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from '../common';
import * as actions from '../../redux/actions';


const ListItem = (props) => {
  const { title, id, description } = props.library.item;
  const { expanded } = props;
  const { titleStyle, textStyle } = styles;

  useEffect(() => {
  }, [LayoutAnimation.spring()]);

  return (
    <TouchableWithoutFeedback onPress={() => props.selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {expanded && (
        <CardSection>
          <Text style={textStyle}>{description}</Text>
        </CardSection>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 13,
    paddingLeft: 15,

  },
  textStyle: {
    flex: 1,
  },
});

const mapStateProps = (state, ownProps) => {
  return { expanded: state.selectedLibraryId.selectedId === ownProps.library.item.id };
};


export default connect(mapStateProps, actions)(ListItem);
