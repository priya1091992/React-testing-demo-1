import React from 'react';
import Link from '../src/Link.react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const wrapper = renderer.create(
    <Link page="http://www.gmail.com">Facebook</Link>,
  );
  let tree = wrapper.toJSON();

  expect(tree).toMatchSnapshot();
});
