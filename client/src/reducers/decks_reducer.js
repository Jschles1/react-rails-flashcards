export default function decksReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_DECKS':
      return action.payload;
    case 'ADD_DECK':
      return state.concat(action.payload);
    case 'DELETE_DECK':
      return state.filter(deck => deck.id !== action.id);
    default:
      return state;
  }
}