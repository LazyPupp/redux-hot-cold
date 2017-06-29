import React from 'react';
import {shallow,mount} from 'enzyme';
import {TopNav} from './top-nav';
import * as actions from '../actions';

describe('Top Nav',function(){
  it('Smoke Test Top Nav', function(){
    shallow(<TopNav />);
  });

  it('Testing if Top Nav has What?',function(){
    const wrapper = shallow(<TopNav />);
    const whatElement = wrapper.find('.what');
    expect(whatElement.length).toEqual(1);
    expect(whatElement.text()).toEqual('What?');
  });

  it('Testing if Top Nav has New Game',function(){
    const wrapper = shallow(<TopNav />);
    const newElement = wrapper.find('.new');
    expect(newElement.length).toEqual(1);
    expect(newElement.text()).toEqual('+ New Game');
  });

  it('Testing onInfo function to be called',function(){
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch}/>);
    wrapper.find('.what').simulate('click');
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actions.toggleInfoModal());
  });

  it('Testing NewGame function call dispatch',function(){
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch}/>);
    wrapper.find('.new').simulate('click');
    expect(dispatch).toHaveBeenCalled();
    //console.log(dispatch.mock);
    expect(dispatch.mock.calls[0][0].type).toEqual(actions.NEW_GAME);
  });

});