import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {TextButton} from '../common';

const getDeck = (title) =>
  Promise.resolve({
    title,
    questions: [],
  });

export class Deck extends React.Component {
  state = {
    deck: {
      title: '',
      questions: [],
    },
  };

  componentDidMount() {
    getDeck(this.props.title).then((deck) => this.setState({deck}));
  }

  render() {
    const {navigation} = this.props;
    const {deck} = this.state;
    const empty = deck.questions.length === 0;

    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <Text style={styles.head}>{deck.title}</Text>
          <Text style={styles.sub}>{`${deck.questions.length} cards`}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TextButton
            buttonStyle={styles.button}
            title="Add Card"
            onPress={() => navigation.navigate('NewQuestion', {title: deck.title})}
          />
          <TextButton
            buttonStyle={styles.buttonDark}
            textStyle={styles.buttonTextLight}
            title="Start Quiz"
            onPress={() => {
              if (empty) {
                Alert.alert('Seems no card exists.');
                return;
              }
              navigation.navigate('Quiz', {deck});
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  deckContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  head: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  sub: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  button: {
    marginBottom: 10,
    width: 150,
  },
  buttonDark: {
    marginBottom: 10,
    width: 150,
    backgroundColor: 'black',
  },
  buttonTextLight: {
    color: 'white',
  },
});

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.navigation.state.params.title,
});

export default connect(mapStateToProps)(Deck);
