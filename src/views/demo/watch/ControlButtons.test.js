import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlButtons from './ControlButtons';
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<ControlButtons />);
  expect(wrapper.find('.left-btn')).toHaveLength(1);
  expect(wrapper.find('.right-btn')).toHaveLength(1);
});