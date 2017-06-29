import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions'


describe('GuessForm', () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    });


    it('should have two input fields', function () {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find('input').length).toEqual(2);
    });

    it('should have one input field with id of userGuess and one with id of guessButton', function () {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find('#userGuess').length).toEqual(1);
        expect(wrapper.find('#guessButton').length).toEqual(1);
    });

    it('Dispatch submitGuess on onSubmit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />)
        let guess = '5';
        wrapper.find('input[id="userGuess"]').node.value = guess;
        wrapper.simulate('submit', {preventDefault() {}});
        expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    });

})