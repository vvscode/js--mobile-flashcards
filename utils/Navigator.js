import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import * as colors from './colors';
import {AddDeckConnected, DeckListConnected, IndivdualDeckViewConnected} from '../components/Deck';
import {QuizView, NewQuestionViewConnected} from '../components/Quiz';
import {isIOS} from './platform';

export const Tabs = new TabNavigator(
  {
    DeckList: {
      screen: DeckListConnected,
      navigationOptions: {
        tabBarLabel: 'Decks',
        /* eslint-disable react/display-name */
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-list" size={30} color={tintColor} />,
      },
    },
    AddDeck: {
      screen: AddDeckConnected,
      navigationOptions: {
        tabBarLabel: 'Add',
        /* eslint-disable react/display-name */
        tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: isIOS ? colors.BACKGROUND_DARK : colors.BACKGROUND_LIGHT,
      style: {
        height: 56,
        backgroundColor: isIOS ? colors.BACKGROUND_LIGHT : colors.BACKGROUND_DARK,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export default new StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {title: 'Home'},
  },
  IndividualDeckView: {
    screen: IndivdualDeckViewConnected,
    navigationOptions: {
      headerTintColor: colors.BACKGROUND_LIGHT,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
  NewQuestionView: {
    screen: NewQuestionViewConnected,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: colors.BACKGROUND_LIGHT,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: colors.BACKGROUND_LIGHT,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
});
