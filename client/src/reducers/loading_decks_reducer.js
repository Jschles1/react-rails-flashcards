export default function loadingDecksReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_DECKS':
      return true;
    case 'FETCH_DECKS':
      return false;
    case 'ERROR':
      return false;
    default:
      return state;
  }
}