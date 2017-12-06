import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as colors from '../../utils/colors';
import {TextInButton} from '../common/index';

export default function QuizScoring({onCorrect, onIncorrect}) {
  return (
    <View style={styles.container}>
      <TextInButton style={{backgroundColor: colors.ANSWER_CORRECT}} onPress={onCorrect}>
        Correct
      </TextInButton>
      <TextInButton style={{backgroundColor: colors.ANSWER_INCORRECT}} onPress={onIncorrect}>
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
    backgroundColor: colors.BACKGROUND_LIGHT,
  },
});
