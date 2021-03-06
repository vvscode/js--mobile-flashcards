import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {createDeck} from '../../utils/api';
import {connect} from 'react-redux';
import {deckCreate} from '../../actions/index';
import * as colors from '../../utils/colors';
import {TextInButton} from '../common';

export class AddDeck extends Component {
  state = {
    text: '',
  };
  submit = () => {
    const entry = this.state;
    const {decks} = this.props;

    if (!entry.text) {
      return;
    }

    if (decks[entry.text]) {
      return Alert.alert(
        'Deck Exists',
        'Aborting! A deck with that name already exists'
      );
    } else {
      const newDeck = {[entry.text]: {title: entry.text, questions: []}};

      this.props.dispatch(deckCreate(newDeck));
      createDeck(newDeck);

      this.setState({text: ''});
      return this.props.navigation.navigate('IndividualDeckView', {
        title: entry.text,
      });
    }
  };
  render() {
    const {text} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{fontSize: 20}}>
          Name your new deck here please!
        </Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
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
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: colors.BACKGROUND_LIGHT,
  },
  input: {
    width: 200,
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

export const AddDeckConnected = connect(mapStateToProps)(AddDeck);
