export default function cardsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CARDS':
      return action.payload;
    case 'ADD_CARD':
      return state.concat(action.payload);
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id);
    default:
      return state;
  }
}