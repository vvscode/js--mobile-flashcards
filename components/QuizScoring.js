import React from 'react';
import {View, StyleSheet} from 'react-native';
import {red, green, offwhite} from '../utils/colors';
import TextInButton from './TextInButton';

export default function QuizScoring({onCorrect, onIncorrect}) {
  return (
    <View style={styles.container}>
      <TextInButton style={{backgroundColor: green}} onPress={onCorrect}>
        Correct
      </TextInButton>
      <TextInButton style={{backgroundColor: red}} onPress={onIncorrect}>
        Incorrect
      </TextInButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 25,
    backgroundColor: offwhite,
  },
});
