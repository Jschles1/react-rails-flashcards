import fetch from 'isomorphic-fetch';

export function submitNewDeck(data) {
  return function(dispatch) {
    return fetch(`/api/decks`, {
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
      .then(deck => {
        dispatch({type: 'ADD_DECK', payload: deck});
      })
    .catch((error) => {
      dispatch({type: 'ERROR'})
    })
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}