import React from 'react';
import {connect} from 'react-redux';

import {makeGuess, fetchPostHighScore, fetchGetHighScore} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
    componentDidUpdate(){
      console.log('hi');
        if(this.props.feedback === 'You got it!'){
          this.props.dispatch(fetchPostHighScore(this.props.guessCount))
          .then(res=>{
            console.log(res);
            this.props.dispatch(fetchGetHighScore())
          });
        }
    }
    submitGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        const guess = parseInt(value, 10);
        if (isNaN(guess)) {
            // state = Object.assign({}, state, {
            //     feedback: 'Please enter a valid number'
            // });

            // return state;
            this.props.dispatch(makeGuess(null,'Please enter a valid number'));
        }

        const difference = Math.abs(guess - this.props.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }
        
        this.props.dispatch(makeGuess(guess,feedback));
    }

    render() {
      console.log('correct answer: ',this.props.correctAnswer);
        return (
            <form onSubmit={e => this.submitGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer,
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessForm);
