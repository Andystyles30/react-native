import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ source, title, score }) => {
  return (
    <View>
      <Image source={source} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

export default ImageDetail;
