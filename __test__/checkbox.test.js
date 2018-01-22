import React from 'react';
import { mount, shallow } from 'enzyme';
import CheckboxWithLabel from '../src/checkbox';
import renderer from 'react-test-renderer';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = mount(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  expect(checkbox.text()).toEqual('Offwww.gmail.com');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('Onwww.gmail.com');
  expect(checkbox.contains(<a href="www.gmail.com">www.gmail.com</a>)).toEqual(true);
});

test('CheckboxWithLabel', () => {
  const wrapper = renderer.create(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );
  let tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});
