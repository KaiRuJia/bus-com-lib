import React from 'react';
import { shallow } from 'enzyme';
import CheckBoxEnum from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<CheckBoxEnum />);
  expect(wrapper.find('.CheckBoxEnum').length).toBe(1);
});
