import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as colors from '../../utils/colors';
import {clearLocalNotification} from '../../utils/helpers';
import {TextInButton} from '../common/index';

export default class QuizFinale extends Component {
  componentDidMount() {
    clearLocalNotification();
  }
  render() {
    const {nCorrect, resetQuiz, navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.group, {flex: 3}]}>
          <Text style={{fontSize: 24}}>You got {nCorrect} correct!</Text>
        </View>
        <View
          style={[styles.group, {flex: 2, justifyContent: 'space-around'}]}
        >
          <TextInButton
            onPress={() => {
              resetQuiz();
              navigation.goBack('QuizView');
            }}
          >
            Reset Quiz
          </TextInButton>
          <TextInButton
            style={{backgroundColor: colors.BTN_COLOR_LIGTH}}
            onPress={() => navigation.goBack(null)}
          >
            Back To Deck
          </TextInButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    backgroundColor: colors.BACKGROUND_LIGHT,
  },
  group: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 5,
    backgroundColor: colors.BACKGROUND_LIGHT,
  },
});
