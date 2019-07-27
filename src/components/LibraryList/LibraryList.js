import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem/ListItem';


const LibraryList = (props) => {
  const { libraries: { libraries } } = props;


  const renderItem = library => <ListItem library={library} />;
  return (
    <View>

      <FlatList
        data={libraries}
        renderItem={renderItem}
        keyExtractor={library => library.title}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  libraries: state.libraries,
});


export default connect(mapStateToProps, {})(LibraryList);
