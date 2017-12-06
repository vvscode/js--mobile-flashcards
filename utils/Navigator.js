import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import * as colors from './colors';
import {Platform} from 'react-native';
import AddDeck from '../components/AddDeck';
import DeckList from '../components/DeckList';
import QuizView from '../components/QuizView';
import IndividualDeckView from '../components/IndividualDeckView';
import NewQuestionView from '../components/NewQuestionView';

export const Tabs = new TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        /* eslint-disable react/display-name */
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
      },
    },
    AddDeck: {
      screen: AddDeck,
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
      activeTintColor: Platform.OS === 'ios' ? colors.BACKGROUND_DARK : colors.BACKGROUND_LIGTH,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? colors.BACKGROUND_LIGTH : colors.BACKGROUND_DARK,
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
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: colors.BACKGROUND_LIGTH,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: colors.BACKGROUND_LIGTH,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: colors.BACKGROUND_LIGTH,
      headerStyle: {
        backgroundColor: colors.BACKGROUND_DARK,
      },
    },
  },
});
