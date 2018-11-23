import React from 'react';
import Banner from './banner';
import renderer from 'react-test-renderer';

it('banner renders correctly', () => {
    const tree = renderer.create(
      <Banner/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

