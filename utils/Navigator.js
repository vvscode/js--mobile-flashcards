import React, {createReactClass} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {blue, white} from './colors';
import {Platform} from 'react-native';
import AddDeck from '../components/AddDeck';
import PrimaryView from '../components/PrimaryView';
import QuizView from '../components/QuizView';
import IndividualDeckView from '../components/IndividualDeckView';
import NewQuestionView from '../components/NewQuestionView';

export const Tabs = new TabNavigator(
  {
    PrimaryView: {
      screen: PrimaryView,
      navigationOptions: {
        tabBarLabel: 'Created Decks',
        tabBarIcon: createReactClass({
          displayName: 'list-of-decks-bar-icon',
          render: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
        }),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: createReactClass({
          displayName: 'create-deck-bar-icon',
          render: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
        }),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
});
