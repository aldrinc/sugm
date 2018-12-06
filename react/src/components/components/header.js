import React from 'react';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import Client from 'shopify-buy';
import Cart from './../Cart';
import cart_icon from '../../images/cart_icon.png';
import seacrch_icon from '../../images/seacrch_icon.png';
import Close from '../../images/close.png';
import {Link} from "react-router-dom";
import Search from "../../images/search";
import ShoppingBag from "../../images/ShoppingBag";
import Menu from "../../images/menu";
import Remove from "../../images/close";
 

const client = Client.buildClient({
	storefrontAccessToken: '5214ca32a041092d1b0992370ee045ad',
	domain: 'shutupandgiftmedev.myshopify.com'
});

 
class Header extends React.Component {
	constructor() {
    super();
	
    this.state = { 
	isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
	  displayMenu: false,
	  displaySearch: false,
    };
	
	this.showSearch = this.showSearch.bind(this);
	this.hideSearch = this.hideSearch.bind(this);
	this.showDropdownMenu = this.showDropdownMenu.bind(this);
	this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
	
	 
  }
 
  handleCartClose() {
    this.setState({
      isCartOpen: false,
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
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true });
  }
  
  hideDropdownMenu() {
    this.setState({ displayMenu: false });

  }
  
  hideSearch() {
    this.setState({ displaySearch: false });

  }
  showSearch(event) {
    this.setState({ displaySearch: true });
  }
  render() { 
    return (
    <header className="Apps__header">
  <div className="container-fluid">
        <div className="row headder">
      <div className="col-4 header_left">
            <div className="nav-side-menu">
          <div className="toggle-button" onClick={this.showDropdownMenu}><Menu width={70}  /> </div>
          { this.state.displayMenu ? (
          <div className="menu-list">
                <div className="menu_list_cnt">
              <div className="close_menu" onClick={this.hideDropdownMenu}><Remove width={30}  /></div>
              <ul className="menu-content">
                    <li>
                  <Link to="/SaleArt" >
                  Sale
                  </Link>
                </li>
                    <li>
                  <Link to="/SaleArt" >
                  Art & More
                  </Link>
                </li>
                    <li>
                  <Link to="/Best Selling" >
                  Best Selling
                  </Link>
                </li>
                    <li>
                  <Link to="/Best Selling" >
                  All Products
                  </Link>
                </li>
                  </ul>
              <ul className="menu-content">
                    <li>
                  <Link to="/AboutUs" >
                  About Us
                  </Link>
                </li>
                    <li>
                  <Link to="/FindmyOrder" >
                  Find my Order
                  </Link>
                </li>
                    <li>
                  <Link to="/OurPolicies" >
                  Our Policies
                  </Link>
                </li>
                  </ul>
              <div className="cruncy_option">
                    <select>
                  <option>United States (USD) </option>
                  <option>India (INR) </option>
                </select>
                  </div>
            </div>
              </div>
          ):
          (
          null
          )
          } </div>
          </div>
      <div className="col-4 header_center">
            <Link to="/" exact={true} >
            <img src={logo} alt="" />
            </Link>
          </div>
      <div className="col-4 header_right">
            <ul>
          <li>
                <div className="search_c" onClick={this.showSearch}><Search width={40}  /></div>
                { this.state.displaySearch ? (
                <div className="light_search_box_cnt">
              <div className="light_search_box"><Search width={30} />
                    <input type="text" placeholder="What can we help you find?" />
                    <div className="close_search" onClick={this.hideSearch}><Remove width={20}  /></div>
                  </div>
            </div>
                ):
                (
                null
                )
                } </li>
          <li> {!this.state.isCartOpen &&
                <div className="cart_icon" onClick={()=> this.setState({isCartOpen: true})}><ShoppingBag width={40}  /></div>
                } </li>
        </ul>
          </div>
    </div>
      </div>
  <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
</header>
);
  }
}
 
export default Header; 