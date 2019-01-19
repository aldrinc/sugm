import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

it('header renders correctly', () => {
    const tree = renderer.create(
      <Router>
<Header/>
      </Router>
      
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
