import React, { Fragment } from 'react';
import {
  Text, View, Image, Linking,
} from 'react-native';

import { Button, Card, CardSection } from '../common';
import { styles } from './css';

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


export default AlbumDetail;
