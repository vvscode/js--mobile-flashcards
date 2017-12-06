import * as TYPES from './types';

export const getDecks = () => ({
  type: TYPES.DECKS_GET,
});

export const createDeck = (title) => ({
  type: TYPES.DECKS_CREATE,
  deck: {
    [title]: {
      title,
      questions: [],
    },
  },
});
