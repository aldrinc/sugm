import React from 'react';
import Search from './search';
import renderer from 'react-test-renderer';

it('search renders correctly', () => {
    const tree = renderer.create(
      <Search></Search>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

