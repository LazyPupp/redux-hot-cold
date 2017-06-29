import React from 'react';
import {shallow} from 'enzyme';
import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions';

describe('Info Modal', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Tests if info-modal contains correct content elements',function(){
    const wrapper = shallow(<InfoModal />);
    expect(wrapper.contains(<h3>What do I do?</h3>)).toEqual(true);
    expect(wrapper.contains(<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>)).toEqual(true);
    expect(wrapper.contains(
                        <ul>
                            <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                            <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                            <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                        </ul>)
                        ).toEqual(true);
    expect(wrapper.contains(<p>So, Are you ready?</p>)).toEqual(true);
  });

 it('Tests if info-modal contains a close class',function(){
    const wrapper = shallow(<InfoModal/>);
    expect(wrapper.find('a').hasClass('close')).toEqual(true);
  });

  it('Tests onClose works on dispatch', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<InfoModal dispatch={dispatch} />)
      wrapper.find('.close').simulate('click', {preventDefault() {}});
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
  });
})