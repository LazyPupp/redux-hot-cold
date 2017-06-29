export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess,feedback) => ({
    type: MAKE_GUESS,
    guess,
    feedback
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const FETCH_GET_HIGH_SCORE_SUCCESS = 'FETCH_GET_HIGH_SCORE_SUCCESS';
export const fetchGetHighScoreSuccess = highScoreList => ({
  type: FETCH_GET_HIGH_SCORE_SUCCESS,
  highScoreList
});

export const FETCH_GET_HIGH_SCORE_ERROR = 'FETCH_GET_HIGH_SCORE_ERROR';
export const fetchGetHighScoreError = error => ({
  type: FETCH_GET_HIGH_SCORE_ERROR,
  error
});

export const FETCH_POST_HIGH_SCORE_SUCCESS = 'FETCH_POST_HIGH_SCORE_SUCCESS';
export const fetchPostHighScoreSuccess = score => ({
  type: FETCH_POST_HIGH_SCORE_SUCCESS,
  score
});

export const FETCH_POST_HIGH_SCORE_ERROR = 'FETCH_POST_HIGH_SCORE_ERROR';
export const fetchPostHighScoreError = error => ({
  type: FETCH_POST_HIGH_SCORE_ERROR,
  error
});

export const fetchGetHighScore= () => dispatch =>{
  return fetch('http://localhost:8080/high-score').then(res=>{
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(highScoreList=>{
    return dispatch(fetchGetHighScoreSuccess(highScoreList));
  }).catch(error=>{
    return dispatch(fetchGetHighScoreError(error));
  });
}

export const fetchPostHighScore =(score) => dispatch=>{
  console.log('input score:', score);
  return fetch('http://localhost:8080/high-score',{
    method: 'POST',
    mode:'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({score})
  }).then(res=>{
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(score=>{
    console.log('returning score: ',score);
    return dispatch(fetchPostHighScoreSuccess(score));
  }).catch(error=>{
    return dispatch(fetchPostHighScoreError(error));
  });
}
