import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';

describe('Guess Count ', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the guess count', () => {
        const count = 10;
        const wrapper = shallow(<GuessCount count={count}/>);
        expect(wrapper.contains(
        <p>
            Guess #<span id="count">{count}</span>!
        </p>)).toEqual(true);
    });
})