export default function errorsReducer(state = false, action) {
  switch (action.type) {
    case 'ERROR':
      return true;
    case 'FETCH_DECKS':
      return false;
    case 'FETCH_CARDS':
      return false;
    case 'ADD_DECK':
      return false;
    case 'ADD_CARD':
      return false;
    default:
      return state;
  }
}