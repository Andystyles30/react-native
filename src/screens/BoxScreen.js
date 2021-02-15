import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  viewOneStyle: {
    // borderWidth: 3,
    // borderColor: 'red',
    backgroundColor: 'red',
    // flex: 4,
    // alignSelf: 'flex-start',
    height: 50,
    width: 50

    // margin: 20
  },
  viewTwoStyle: {
    // borderWidth: 3,
    // borderColor: 'green',
    backgroundColor: 'green',
    height: 50,
    width: 50,
    // position: 'absolute'
    // ...StyleSheet.absoluteFillObject
    marginTop: 50
    // right: 0,
    // bottom: 0,
    // left: 0
    // fontSize: 18
    // alignSelf: 'stretch',
    // flex: 4,
    // margin: 50
  },
  viewThreeStyle: {
    // borderWidth: 3,
    // borderColor: 'blue',
    backgroundColor: 'blue',
    // flex: 4,
    // alignSelf: 'flex-start',
    height: 50,
    width: 50
    // margin: 20
  }
});

export default BoxScreen;
