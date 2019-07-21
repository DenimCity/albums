import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from '../AlbumDetail';


const AlbumList = () => {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        setRockets(res.data);
      })
      .catch(err => console.error(err.message));
  }, []);


  return (
    <ScrollView>
      {rockets && rockets.map(album => <AlbumDetail key={album.title} album={album} />)}
    </ScrollView>
  );
};

export default AlbumList;
