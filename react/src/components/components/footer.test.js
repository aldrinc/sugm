import React from 'react';
import Footer from './footer';
import renderer from 'react-test-renderer';

it('footer wrenders correctly', () => {
    const tree = renderer.create(
      <Footer></Footer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

