import * as TYPES from './types';

export const getDecks = () => ({
  type: TYPES.DECKS_GET,
});

export const createDeck = () => ({
  type: TYPES.DECKS_CREATE,
});
