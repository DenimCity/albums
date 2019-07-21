import React, { Fragment } from 'react';
import {
  Text, View, Image, StyleSheet, Linking,
} from 'react-native';

import { Button, Card, CardSection } from '../common';

const AlbumDetail = ({ album }) => {
  const {
    title, artist, thumbnail_image, image, url,
  } = album;
  const {
    thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Fragment>

      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    </Fragment>
  );
};


const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 19,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
