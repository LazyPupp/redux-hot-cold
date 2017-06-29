import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

describe('Game', function(){
  it('Smoke Test',function(){
    shallow(<Game/>);
  });

  it('render properly',function(){
    const wrapper = shallow(<Game/>);
    expect(wrapper.find(Header).exists()).toEqual(true);
    expect(wrapper.find(GuessSection).exists()).toEqual(true);
    expect(wrapper.find(GuessCount).exists()).toEqual(true);
    expect(wrapper.find(GuessList).exists()).toEqual(true);
  });
})