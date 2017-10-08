import fetch from 'isomorphic-fetch';

export function submitNewCard(data, deckId) {
  return function(dispatch) {
    return fetch(`/api/decks/${deckId}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(handleErrors)
      .then(resp => {
        return resp.json();
      })
      .then(card => {
        dispatch({type: 'ADD_CARD', payload: card});
      })
    .catch((error) => {
      dispatch({type: 'ERROR'})
    })
  }
}