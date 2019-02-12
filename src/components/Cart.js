import React, {Component} from 'react';
import LineItem from './LineItem';
import TagManager from 'react-gtm-module';
import Product from "./Product";
import client from "../helpers/ShopifyClient";

const tagManagerArgs = {
  dataLayerName: 'AppDataLayer'
}


class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  // componentDidMount(){
  //   if (this.state.isCartOpen) {

  //   }
  // }




  openCheckout() {

    var line_items = this.props.checkout.lineItems;
    var products = [];
    line_items.forEach(function (lineItem) {
      products.push(
        {
          'name': lineItem.title,                      // Name or ID is required.
            'id': lineItem.id,
            'price': lineItem.variant.price,
            'brand': lineItem.vendor,
            'variant': lineItem.variant.title
        }
      )

    })



    tagManagerArgs.dataLayer = {
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 1, 'option': 'Contact'},
          'products': products
       }
     },
     'eventCallback': function() {
        document.location = this.props.checkout.webUrl;
     }
    }
    
    TagManager.dataLayer(tagManagerArgs);
    
    // window.testGlobalBeforeReact(0);
    // console.log(this.props.checkout.webUrl);
    // var url = this.props.checkout.webUrl;
    // var newUrl = url.replace("https://vincentboscoart-com.myshopify.com", "https://shop.myshopify.com");
    // console.log(newUrl);
    window.open(this.props.checkout.webUrl, "_self");
  }

  render() {
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });
 

    return (

      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>

        <header className="Cart__header">
          <h2>Your cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            Close
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>

        <footer className="Cart__footer">
        <div>
          
        </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info total clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
         <div className="chk_button"><button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button></div>
        </footer>
        </div>


    )
  }
}

export default Cart;
