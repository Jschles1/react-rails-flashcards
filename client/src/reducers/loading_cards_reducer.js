export default function loadingCardsReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_CARDS':
      return true;
    case 'FETCH_CARDS':
      return false;
    case 'ERROR':
      return false;
    default:
      return state;
  }
}