import React from "react"; 
import Index from './components/components/Home'; 
import Header from './components/components/header'; 
import Footer from './components/components/footer'; 
import Collection from './components/components/collection'; 
import Pro  from './components/components/product'; 
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from "react-router-dom";

const WillMatch = () => {
  return <h3>Matched!</h3>;
}

const NoMatch = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
 
class Main extends React.Component {
  render() {
  return (
    <Router>
	<div className="fullwidth"> 
	<Header/>
	<Switch>
	  <Route path="/" exact component={Index} />
	  <Route path="/Product/:productId" component={Pro} />
	  <Route path="/SaleArt" component={Collection} />
	  <Redirect from="/old-match" to="/will-match" />
	  <Route path="/will-match" component={WillMatch} />
	  <Route component={NoMatch} />
	</Switch>
      <Footer/>
      </div>
    </Router>
  );
  }
}

export default Main;