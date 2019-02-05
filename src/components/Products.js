import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Icon from "../images/arrow";
import client from "../helpers/ShopifyClient";

class Products extends Component {
  render() {
    let products = this.props.bestProducts.slice(0, 6).map(bestproduct => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={client}
          key={bestproduct.id.toString()}
          product={bestproduct}
        />
      );
    });
    let artProducts = this.props.artProducts.slice(0, 6).map(artproduct => {
      // console.log(artproduct);
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={client}
          key={artproduct.id.toString()}
          product={artproduct}
        />
      );
    });

    return (
      <div className="fullwidth">
        <div className="container-fluid">
          <div className="row content">
            <div className="col-12">
              <div className="title">
                <h2>Our Beauty Picks</h2>
                <Link to="/beauty-picks" className="see_all">
                  <span>See All </span>
                  <Icon width={35} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bestseller"> {products} </div>
          <div className="seeallcnt">
            <Link to="/best-sellers" className="see_all">
              <span>See All</span>
              <Icon width={35} />
            </Link>
          </div>
          <div className="row content morefrom">
            <div className="col-12">
              <div className="title">
                <h2>More from our top collection</h2>
                <Link to="/top-selling" className="see_all">
                  <span>See All</span>
                  <Icon width={35} />
                </Link>
              </div>
            </div>
            <div className="bestseller"> {artProducts} </div>
            <div className="seeallcnt">
              <Link to="/all-products" className="see_all">
                <span>See All</span>
                <Icon width={35} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
