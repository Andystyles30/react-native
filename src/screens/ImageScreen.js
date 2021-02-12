import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        source={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="beach"
        source={require('../../assets/beach.jpg')}
        score={4}
      />
      <ImageDetail
        title="Mountain"
        source={require('../../assets/mountain.jpg')}
        score={10}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30
//   }
// });

export default ImageScreen;
