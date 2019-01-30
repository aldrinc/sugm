import React, {Component} from 'react';

import SubtractCircle from "../images/subtract-circle";
import AddCircle from "../images/add-circle";
import Close from "../images/close";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  dataLayerName: 'AppDataLayer'
}

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

  }

  decrementQuantity(lineItemId) { 
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  removeFromCart(product) {
    // console.log("removed from Cart", product);
    var productObj = product

    tagManagerArgs.dataLayer = {
      'event': 'removeFromCart',
      'ecommerce': {
        'add': {                                // 'add' actionFieldObject measures.
          'products': [{
            'name': productObj.title,                      // Name or ID is required.
            'id': productObj.id,
            'price': productObj.variant.price,
            'variant': productObj.variant.title
           }]
        }
      }
    }
    
    TagManager.dataLayer(tagManagerArgs)
    this.props.removeLineItemInCart(product.id)
  }

  render() {
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`}/> : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}><SubtractCircle /></button>
              <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
              <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}><AddCircle /></button>
            </div>
            <span className="Line-item__price">
              $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
            <button className="Line-item__remove" onClick={()=> this.removeFromCart(this.props.line_item)}><Close/></button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
