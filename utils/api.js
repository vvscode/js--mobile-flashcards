import {AsyncStorage} from 'react-native';
import {formatDecks, DECKS_STORAGE_KEY} from './decks';

export const fetchDecks = () => AsyncStorage.getItem(DECKS_STORAGE_KEY).then((r) => formatDecks(r));

export const createDeck = (deck) => AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));

export const addCardDeck = ({card, deckName}) => fetchDecks()
  .then((decks) => {
    const value = JSON.stringify({
      [deckName]: {title: deckName, questions: [...decks[deckName].questions, card]},
    });

    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
  });
