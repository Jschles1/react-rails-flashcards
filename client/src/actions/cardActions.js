import fetch from 'isomorphic-fetch';

export function fetchCards(deckId, callback) {
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    return fetch(`/api/decks/${deckId}/cards`)
      .then(resp => resp.json())
      .then(cards => dispatch({type: 'FETCH_CARDS', payload: cards}))
      .then(callback)
  }
}

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

export function deleteCard(deckId, id) {
  return function(dispatch) {
    return fetch(`/api/decks/${deckId}/cards/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        dispatch({type: 'DELETE_CARD', id: parseInt(id)})
      })
  }
}

export function removeAnsweredCard(id) {
  return {type: 'DELETE_CARD', id: parseInt(id)}
}

export function submitScore(deckId, score, callback) {
  return function(dispatch) {
    return fetch(`api/decks/${deckId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ high_score: score })
    })
      .then(callback)
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}