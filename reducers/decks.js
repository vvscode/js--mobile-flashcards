import {CARDS_CREATE, DECKS_GET, DECKS_CREATE} from '../actions';

const DEFAULT_STATE = {};

function decks(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case DECKS_GET:
      return {...state, ...action.decks};

    case DECKS_CREATE:
      return {...state, ...action.deck};

    case CARDS_CREATE:
      const {title, questions, question, answer} = action.params;

      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...questions, {question, answer}],
        },
      };

    default:
      return state;
  }
}

export default decks;
