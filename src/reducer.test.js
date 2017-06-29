import React from 'react';
//import {shallow} from 'enzyme';
import Reducer from './reducer';
import * as actions from './actions';


describe('Testing Reducer',function(){
  it('Setting initial state',function(){
    const state = Reducer(undefined,{type:'Nick'});

    expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: state.correctAnswer,
            showInfoModal: false
    });
  });

  it('Return current state on nick action',function(){
    const currentState ={};
    const state = Reducer(currentState,{type:'Nick'});
    expect(state).toBe(currentState);
  })

  it('New Game Action',function(){
    const dummy = {
      guesses: [12,23],
      feedback:'You got it!',
      correctAnswer: 23,
      showInfoModal:false
    }    

    const state = Reducer(dummy, actions.newGame());
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Toggle Info Action',function(){
    const dummy = {
      guesses: [12,23],
      feedback:'You got it!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const state = Reducer(dummy, actions.toggleInfoModal());
    const initialState = {
      guesses: [12,23],
      feedback: 'You got it!',
      correctAnswer: state.correctAnswer,
      showInfoModal: true
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Guess Action Test Hot Answer',function(){
    const dummy = {
      guesses: [12],
      feedback:'You\'re Hot!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const state = Reducer(dummy, actions.makeGuess(21));
    const initialState = {
      guesses: [12,21],
      feedback: 'You\'re Hot!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Guess Action Test Correct answer',function(){
    const dummy = {
      guesses: [12],
      feedback:'You\'re Hot!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const state = Reducer(dummy, actions.makeGuess(23));
    const initialState = {
      guesses: [12,23],
      feedback: 'You got it!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Guess Action Test Warm Answer',function(){
    const dummy = {
      guesses: [21],
      feedback:'You\'re Hot!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const guess = dummy.correctAnswer+10;
    const state = Reducer(dummy, actions.makeGuess(guess));
    const initialState = {
      guesses: [21,guess],
      feedback: 'You\'re Warm',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Guess Action Test Cold Answer',function(){
    const dummy = {
      guesses: [21],
      feedback:'You\'re Hot!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const guess = dummy.correctAnswer+30;
    const state = Reducer(dummy, actions.makeGuess(guess));
    const initialState = {
      guesses: [21,guess],
      feedback: 'You\'re Cold...',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });

  it('Guess Action Test Ice Cold Answer',function(){
    const dummy = {
      guesses: [21],
      feedback:'You\'re Hot!',
      correctAnswer: 23,
      showInfoModal:false
    }   
    const guess = dummy.correctAnswer+50;
    const state = Reducer(dummy, actions.makeGuess(guess));
    const initialState = {
      guesses: [21,guess],
      feedback: 'You\'re Ice Cold...',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    }
    expect(state).toEqual(initialState);
    expect(state).not.toEqual(dummy);
  });  
});

