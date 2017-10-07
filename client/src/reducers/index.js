import { combineReducers } from 'redux';
import decksReducer from './decks_reducer';
import cardsReducer from './cards_reducer';
import errorsReducer from './errors_reducer';
import loadingDecksReducer from './loading_decks_reducer';
import loadingCardsReducer from './loading_cards_reducer';

const rootReducer = combineReducers({ 
  decks: decksReducer,
  cards: cardsReducer,
  loadingDecks: loadingDecksReducer,
  loadingCards: loadingCardsReducer,
  errors: errorsReducer
});

export default rootReducer;