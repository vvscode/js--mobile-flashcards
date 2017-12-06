import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {gray} from '../utils/colors';
import TextButton from './TextButton';

export default class QuizQAFlipper extends Component {
  render() {
    const {question, answer, toggleQA, showAnswer} = this.props;
    const ansOrQuesView = (question, answer, showAnswer) => showAnswer ? answer : question;
    return (
      <View>
        <View>
          <Text style={{fontSize: 32}}>{ansOrQuesView(question, answer, showAnswer)}</Text>
          <TextButton
            onPress={toggleQA}
            style={{fontSize: 16, color: gray}}>{showAnswer ? ('Question') : ( 'Answer')}
          </TextButton>
        </View>
      </View>
    );
  }
}
