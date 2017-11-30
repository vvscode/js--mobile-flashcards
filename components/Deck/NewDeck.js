import React from 'react';
import {StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {TextButton} from '../common';
import {createDeck} from '../../actions';

export class PureNewDeck extends React.Component {
  state = {
    text: '',
  };

  handleSubmit = () => {
    if (!this.state.text) {
      return false;
    }
    // store
    this.props.dispatch(createDeck(this.state.text));

    // state
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.head}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Deck Title"
          underlineColorAndroid="transparent"
          onEndEditing={this.handleSubmit}
        />
        <TextButton
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title="Submit"
          onPress={this.handleSubmit}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5FCFF',
  },
  head: {
    marginVertical: 50,
    textAlign: 'center',
    fontSize: 40,
  },
  input: {
    marginBottom: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
  },
  button: {
    alignSelf: 'center',
    width: 100,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
});

export const NewDeck = connect()(PureNewDeck);
