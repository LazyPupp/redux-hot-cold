import React from 'react';
import {connect} from 'react-redux';
import {fetchGetHighScore} from '../actions';
import './guess-highscore.css';

export class GuessHighScore extends React.Component {
    componentWillMount(){
      this.props.dispatch(fetchGetHighScore());
    }
    render(){
      return (
        <p>
            HighScore #<span id="count">{this.props.highScore}</span>!
        </p>
      );
    }
}

const mapStateToProps = state => ({
    highScore: state.highScore
});

export default connect(mapStateToProps)(GuessHighScore);