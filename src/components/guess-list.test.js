import React from 'react';
import {shallow,mount} from 'enzyme';
import {GuessList} from './guess-list';

describe('Guess List',function(){
  const seedGuessList = [];

  beforeAll(() => {
    for(let i = 0; i < 5; i++) {
      seedGuessList.push(i);
    }
  });

  it('Smoke Test', function(){
    shallow(<GuessList guesses={[]}/>);
    shallow(<GuessList guesses={seedGuessList}/>);
  });
  
  it('it should contain ul and 0 li with empty guesses',function(){
    const wrapper = shallow(<GuessList guesses={[]}/>);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(0);
  });

  it('it should contain ul and 0 li with non-empty guesses',function(){
    const wrapper = shallow(<GuessList guesses={seedGuessList}/>);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(5);
  });

   it('should contain correct values in guess list', function() {
    const wrapper = shallow(<GuessList guesses={seedGuessList}/>);
    wrapper.find('li').forEach((node, index) => {
      expect(node.text()).toEqual((index).toString());
    });
  });  
});