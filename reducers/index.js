import {CARD_CREATE, DECKS_GET, DECK_CREATE} from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case DECKS_GET:
      return {...state, ...action.decks};

    case DECK_CREATE:
      return {...state, ...action.deck};

    case CARD_CREATE:
      const {title, questions, questionText, answerText} = action.params;

      return {
        ...state,
        [title]: {...state[title], questions: [...questions, {question: questionText, answer: answerText}]},
      };

    default:
      return state;
  }
}

export default decks;
