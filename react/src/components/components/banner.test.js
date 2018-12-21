import React from 'react';
import Banner from './banner';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';


it('banner renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Banner/>
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

