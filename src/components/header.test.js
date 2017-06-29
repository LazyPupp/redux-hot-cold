import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

import {Header} from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Header showInfoModal={false} dispatch={dispatch}/>);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Renders TopNav and h1 element', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Header showInfoModal={false} dispatch={dispatch} />);
        //console.log(wrapper);
        expect(wrapper.find('TopNav').exists()).toEqual(true);
        expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
    })


});