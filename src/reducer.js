import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODAL,
    FETCH_POST_HIGH_SCORE_SUCCESS,
    FETCH_GET_HIGH_SCORE_SUCCESS 
} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false,
    highScore: 100
};

export default (state, action) => {
    state = state || initialState;
    if (action.type === NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            correctAnswer: action.correctAnswer,
            highScore:state.highScore
        });
        return state;
    }
    else if (action.type === MAKE_GUESS) {
        // const guess = parseInt(action.guess, 10);
        // if (isNaN(guess)) {
        //     state = Object.assign({}, state, {
        //         feedback: 'Please enter a valid number'
        //     });

        //     return state;
        // }

        // const difference = Math.abs(guess - state.correctAnswer);

        // let feedback;
        // if (difference >= 50) {
        //     feedback = 'You\'re Ice Cold...';
        // }
        // else if (difference >= 30) {
        //     feedback = 'You\'re Cold...';
        // }
        // else if (difference >= 10) {
        //     feedback = 'You\'re Warm';
        // }
        // else if (difference >= 1) {
        //     feedback = 'You\'re Hot!';
        // }
        // else {
        //     feedback = 'You got it!';
        // }

        if(action.guess){
          state = Object.assign({}, state, {
            feedback:action.feedback,
            guesses: state.guesses.concat(action.guess)
          });
        }else{
          state = Object.assign({}, state, {
            feedback:action.feedback
          });
        }
        return state;
    }
    else if (action.type === TOGGLE_INFO_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }
    else if(action.type === FETCH_GET_HIGH_SCORE_SUCCESS){
      if(action.highScoreList.length >0){
        return Object.assign({},state,{highScore:action.highScoreList[0]});
      }
      return state;
    }
    // else if(action.type === FETCH_POST_HIGH_SCORE_SUCCESS){
    //    const array = [...state,action.highScore];

    // }
    return state;
};

