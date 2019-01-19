import React from "react"; 
 
 

import Index from './Home'; 
 
 import Header from './header'; 
 import Footer from './footer'; 
import Collection from './collection'; 
import Pro  from './product'; 


import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from "react-router-dom";

function NoMatchExample() {
  return (
    <Router>
	
	<div className="fullwidth"> 
	<Header/>
			<Switch>
			  <Route path="/" exact component={Home} />
			  <Route path="/Product" exact component={Product} />
			  <Route path="/SaleArt" component={SaleArt} />
			  <Redirect from="/old-match" to="/will-match" />
			  <Route path="/will-match" component={WillMatch} />
			  <Route component={NoMatch} />
			</Switch>
      <Footer/>
      </div>
    </Router>
  );
}
 function Home() {
  return (
        <Index />  
  );
 }
function Product() {
  return (
		 <Pro/>
  );
}
function SaleArt() {
  return (
	 <Collection/>
  )
}

function WillMatch() {
  return <h3>Matched!</h3>;
}
 

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatchExample;