import React from 'react';
import Story from './Story';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
      <Story/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

