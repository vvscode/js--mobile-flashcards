import {AsyncStorage} from 'react-native';

import DEMO_DECKS from '../data/default-decks';

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export const getDeckForStorage = (title = '', cards = []) =>
  JSON.stringify({
    [title]: {
      title,
      cards,
    },
  });

export const getDecks = (_) =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then((res) => JSON.parse(res));

export const createDeck = (title) =>
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, getDeckForStorage(title, []));

export const createCard = (title, {question, answer}) =>
  getDecks().then((decks) =>
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      getDeckForStorage(title, [...decks[title].cards, {question, answer}])
    )
  );

export const installDemoData = () =>
  getDecks().then((decks) => {
    if (decks.length) {
      return 'data already exists';
    }
    DEMO_DECKS.forEach((deck) =>
      createDeck(deck.title).then(() =>
        deck.questions.forEach(({question, answer}) =>
          createCard(deck.title, {question, answer})
        )
      )
    );
  });

installDemoData();
