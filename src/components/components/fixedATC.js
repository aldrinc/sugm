import React, {Component} from 'react' 
import SubtractCircle from "../../images/subtract-circle";
import AddCircle from "../../images/add-circle";
import TagManager from 'react-gtm-module';


const tagManagerArgs = {
    dataLayerName: 'AppDataLayer'
  }

class FixedATC extends Component {

    constructor(props) {
        super(props);

        this.onATC = this.onATC.bind(this);

    }

    
    onATC(variant, variantQuantity, product) {    
        var productObj = product
        // console.log(this.state, variant, variantQuantity, product);
        tagManagerArgs.dataLayer = {
          'event': 'addToCart',
          'ecommerce': {
            'add': {                                // 'add' actionFieldObject measures.
              'products': [{
                'name': productObj.title,                      // Name or ID is required.
                'id': productObj.id,
                'price': variant.price,
                'brand': productObj.vendor,
                'variant': variant.title
               }]
            }
          }
        }
        
        TagManager.dataLayer(tagManagerArgs)
    
        this.props.addVariantToCart(this.props.variant.id, this.props.variantQuantity);
    
    
      }


      
    render() {
      
      return ( <div className="add_cart_cnt">
      <div className="row">
      <div className="col-7">
        {(this.props.variantSelectors.length > 0 && this.props.variantSelectors[0]) ?
              <div className="pro_type">
                <label>Type</label>
                {this.props.variantSelectors} </div>
                : null }
                </div>
                 <div className="col-5">
              <div className="pro_qyt">
                <label className="Product__quntity"> <span>Quantity</span> </label>
                <div className="pro_qyt_box">
                  <button onClick={this.props.minusQty}><SubtractCircle /></button>
                  
                  <input min="1" type="text" value={this.props.variantQuantity} onChange={this.props.handleQuantityChange} disabled/>
                  <button  onClick={this.props.plusQty}><AddCircle /></button>
                  </div>
                  </div>
              </div>
               <div className="col-12">
              <div className="addbuttonbox">
                <button id="addToBagBtn" onClick={() => this.onATC(this.props.variant, this.props.variantQuantity, this.props.product)}>Buy Now</button>
              </div>
              </div>
    </div>
    </div>);
    }
  }

export default FixedATC;

