import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Animated, StyleSheet, Text, View} from 'react-native';
import * as colors from '../utils/colors';
import TextInButton from './TextInButton';

class IndivdualDeckView extends Component {
  state = {
    bounceValue: new Animated.Value(1),
  };
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;
    return {
      title,
    };
  };
  componentDidMount() {
    const {bounceValue} = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, {duration: 400, toValue: 1.2}),
      Animated.spring(bounceValue, {toValue: 1, friction: 4}),
    ]).start();
  }
  render() {
    const {bounceValue} = this.state;
    const {title} = this.props.navigation.state.params;
    const questions = this.props.decks[title].questions;

    return (
      <View style={styles.container}>
        <View style={[styles.group, {flex: 3}]}>
          <Animated.Text style={{fontSize: 40, transform: [{scale: bounceValue}]}}>{title}</Animated.Text>
          <Text style={{fontSize: 24, color: colors.TEXT_COLOR}}>cards: {questions.length}</Text>
        </View>
        <View style={[styles.group, {flex: 2, justifyContent: 'space-around'}]}>
          <TextInButton
            style={{backgroundColor: colors.BTN_COLOR_LIGTH}}
            onPress={() => {
              this.props.navigation.navigate('NewQuestionView', {
                title,
                questions,
              });
            }}
          >
            Add Card
          </TextInButton>
          <TextInButton
            onPress={() => {
              this.props.navigation.navigate('QuizView', {
                title,
                questions,
              });
            }}
          >
            Start Quiz
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
    justifyContent: 'center',
    paddingTop: 25,
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

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(IndivdualDeckView);
