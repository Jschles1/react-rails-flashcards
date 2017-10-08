export default function decksReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_EXERCISES':
      return action.payload;
    case 'ADD_EXERCISE':
      return state.concat(action.payload);
    default:
      return state;
  }
}