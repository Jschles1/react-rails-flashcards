import fetch from 'isomorphic-fetch';

export function fetchDecks() {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    return fetch(`/api/decks`)
      .then(resp => resp.json())
      .then(decks => dispatch({type: 'FETCH_DECKS', payload: decks}))
  }
}

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

export function deleteDeck(id) {
  return function(dispatch) {
    return fetch(`/api/decks/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        dispatch({type: 'DELETE_DECK', id: parseInt(id)})
      })
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}