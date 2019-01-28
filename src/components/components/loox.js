import React, {Component} from 'react' 

class Loox extends Component {    
    render() {
      return (<div id="looxReviews" data-product-id={this.props.productID} className="loox-reviews-default"></div>);
    }
  }

export default Loox;
