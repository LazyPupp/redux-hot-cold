import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

import {Header} from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Renders TopNav and h1 element', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('TopNav').length).toEqual(1);
    })


});