import React, { Component } from 'react';
import Products from '../Products';
import Cart from '../Cart'; 
import client from '../../helpers/ShopifyClient';
import { LocalStorage } from '../../helpers/LocalStorage';
 
import Story from './Story'; 
import Banner from './banner';  

class Index extends Component {

  constructor() {
    super();
    this.lc = new LocalStorage();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    client.checkout.create().then((res) => {
      this.lc.putObject('checkout', res);
      this.setState({
        checkout: res,
      });
    });

    client.product.fetchAll().then((res) => {
      this.lc.putObject('products', res);
      console.info('products: ', this.lc.getObject('products'))
      this.setState({
        products: res,
      });
    });

    client.shop.fetchInfo().then((res) => {
      this.lc.putObject('shop', res);
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Banner/>
         <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />       
		<Story/>
		 <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
		 
		 
      </div>
    );
  }
}

export default  Index;
