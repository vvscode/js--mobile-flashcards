import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import * as colors from '../../utils/colors';
import {addCard} from '../../actions/index';
import {connect} from 'react-redux';
import {addCardDeck} from '../../utils/api';
import {TextInButton} from '../common/index';

class NewQuestionView extends Component {
  state = {
    questionText: '',
    answerText: '',
  };
  submit = () => {
    const {title, questions} = this.props.navigation.state.params;

    const {questionText, answerText} = this.state;
    let alert = null;

    if (questionText === '') {
      alert = {title: 'Missing question', content: 'You need to fill in the question field'};
    }

    if (answerText === '') {
      alert = {title: 'Missing question', content: 'You need to fill in the answer field'};
    }

    if (alert) {
      Alert.alert(alert.title, alert.content);
    }
    const params = {title, questions, questionText, answerText};
    this.props.dispatch(addCard(params));
    addCardDeck({
      card: {question: questionText, answer: answerText},
      deckName: title,
    });

    Alert.alert(
      'Card Added',
      'yayay your card has been added to the deck.' +
        ' enter more cards, or go back'
    );
    this.setState({questionText: '', answerText: ''});
    return;
  };
  render() {
    const {questionText, answerText} = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        keyboardVerticalOffset={-164}
      >
        <Text>Question:</Text>
        <TextInput
          value={questionText}
          style={styles.input}
          onChangeText={(questionText) => this.setState({questionText})}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answerText}
          style={styles.input}
          onChangeText={(answerText) => this.setState({answerText})}
        />
        <TextInButton onPress={this.submit}>SUBMIT</TextInButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    backgroundColor: colors.BACKGROUND_LIGHT,
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    margin: 20,
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}
export const NewQuestionViewConnected = connect(mapStateToProps)(NewQuestionView);
