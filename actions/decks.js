export const DECKS_GET = 'DECKS_GET';
export const DECK_CREATE = 'DECK_CREATE';
export const CARD_CREATE = 'CARD_CREATE';

export const receiveDecks = (decks) => ({
  type: DECKS_GET,
  decks,
});

export const addDeck = (deck) => ({
  type: DECK_CREATE,
  deck,
});

export const addCard = (params) => ({
  type: CARD_CREATE,
  params,
});
