export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING':
      return true;
    case 'FETCH_CARDS':
      return false;
    case 'FETCH_CARDS':
      return false;
    case 'ERROR':
      return false;
    default:
      return state;
  }
}