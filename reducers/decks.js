import { CARDS_CREATE, DECKS_GET, DECKS_CREATE } from "../actions";

const DEFAULT_STATE = {};

const decks = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DECKS_GET:
      return { ...state };

    case DECKS_CREATE:
      return { ...state };

    case CARDS_CREATE:
      return { ...state };

    default:
      return state;
  }
};

export default decks;
