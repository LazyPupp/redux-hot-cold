import React from 'react';
import {shallow} from 'enzyme';
import {GuessSection} from './guess-section';
import GuessForm from './guess-form';

describe('Guess Section', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
    it('rendering feedback', () => {
        const feedback = "This is for Kyle S";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
    it('should render GuessForm', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.find(GuessForm).exists()).toEqual(true);
    });
})