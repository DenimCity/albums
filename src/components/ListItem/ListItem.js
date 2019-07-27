import React from 'react';
import { Text } from 'react-native';

import { CardSection } from '../common';

const ListItem = ({ library }) => {
  const { title } = library.item;
  return (
    <CardSection>
      <Text>{title}</Text>
    </CardSection>
  );
};

export default ListItem;
