export const DECKS_GET = 'DECKS_GET';
export const DECK_CREATE = 'DECK_CREATE';
export const CARD_CREATE = 'CARD_CREATE';

export const decksGet = (decks) => ({
  type: DECKS_GET,
  decks,
});

export const deckCreate = (deck) => ({
  type: DECK_CREATE,
  deck,
});

export const cardCreate = (params) => ({
  type: CARD_CREATE,
  params,
});
