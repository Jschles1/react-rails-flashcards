export default function answeredReducer(state = { count: 0, correct: 0, incorrect: 0}, action) {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count++ };
    case 'INCREMENT_CORRECT':
      return { ...state, count: state.correct++ };
    case 'INCREMENT_INCORRECT':
      return { ...state, count: state.incorrect++ };
    case 'RESET_COUNTS':
      return { count: 0, correct: 0, incorrect: 0};
    default:
      return state;
  }
}