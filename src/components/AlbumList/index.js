import React, { useState, useEffect } from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';
import axios from 'axios';


const AlbumList = () => {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => setRockets(res.data))
      .catch(err => console.error(err.message));
  }, []);
  console.log(rockets);
  return (
    <View>
      <Text>Album List</Text>
    </View>
  );
};

export default AlbumList;
