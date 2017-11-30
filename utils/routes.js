import {StackNavigator, TabNavigator} from 'react-navigation';

import {STATUSBAR_HEIGHT as paddingTop, HEIGHT as height} from './constants';
import * as screens from '../screens';

const screen = (screen) => ({screen});

const tabNavigator = new TabNavigator(
  {
    DeckList: screen(screens.DeckListScreen),
    NewDeck: screen(screens.NewDeckScreen),
  },
  {
    tabBarOptions: {
      style: {
        paddingTop,
        height,
      },
    },
  }
);

export default new StackNavigator(
  {
    Main: {
      screen: tabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Deck: screen(screens.DeckScreen),
    NewQuestion: screens.NewQuestionScreen,
    Quiz: screen(screens.QuizScreen),
  },
  {
    navigationOptions: {
      headerStyle: {
        paddingTop,
        height,
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    },
  }
);
