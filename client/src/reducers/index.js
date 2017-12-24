import { combineReducers } from 'redux';
import decksReducer from './decks_reducer';
import cardsReducer from './cards_reducer';
import errorsReducer from './errors_reducer';
import loadingDecksReducer from './loading_decks_reducer';
import loadingCardsReducer from './loading_cards_reducer';
import answeredReducer from './answered_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({ 
  decks: decksReducer,
  cards: cardsReducer,
  // loadingDecks: loadingDecksReducer,
  // loadingCards: loadingCardsReducer,
  loading: loadingReducer,
  answered: answeredReducer,
  errors: errorsReducer
});

export default rootReducer;