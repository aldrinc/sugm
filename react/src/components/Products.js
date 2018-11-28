import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
	<div className="fullwidth">
       <div className="container">
	  		<div className="row content">
			  <div className="col-12">
				<div className="title">
				  <h2>Our Bestseller</h2>
				  <a href="#" className="see_all">See all <i className="fas fa-angle-double-right right_d_arrow"></i></a>
				</div>
			  </div>
			  </div> 
			  <div className="bestseller">
				{products}
        </div>
	  <div className="seeallcnt">
				<a href="#" className="see_all">See All <i className="fas fa-long-arrow-alt-right"></i></a>
			</div>
			<div className="row content morefrom">
			  <div className="col-12">
				<div className="title">
				   <h2>More from our art collection</h2>
				  <a href="#" className="see_all">See all <i className="fas fa-angle-double-right right_d_arrow"></i></a>
				</div>
			  </div>
			   <div className="bestseller">
				{products}
        </div>
		<div className="seeallcnt">
				<a href="#" className="see_all">See All <i className="fas fa-long-arrow-alt-right"></i></a>
			</div>
		 </div>  
		</div>
      </div>
      
    );
  }
}

export default Products;
