export default function decksReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_DECK':
      return state.concat(action.payload);
    default:
      return state;
  }
}