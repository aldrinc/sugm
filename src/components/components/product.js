import React from 'react' 
import icon_1 from '../../images/fwc.png'; 
import icon_2 from '../../images/er.png'; 
import icon_3 from '../../images/hh.png'; 
import icon_4 from '../../images/sc.png';  
import SubtractCircle from "../../images/subtract-circle";
import AddCircle from "../../images/add-circle";
import {Link} from "react-router-dom";
import { LocalStorage } from '../../helpers/LocalStorage';
import VariantSelector from '../VariantSelector';
import client from '../../helpers/ShopifyClient';
import StarRatingComponent from 'react-star-rating-component';
import SingleProduct from './singleproduct'; 
import TagManager from 'react-gtm-module';
import axios from 'axios';
import Loox from "./loox";
import FixedATC from "./fixedATC";

import IntersectionVisible    from 'react-intersection-visible';

const axiosShopifyGraphQL = axios.create({
  baseURL: 'https://vincentboscoart.myshopify.com/admin/api/graphql.json',
  headers: {
    "X-Shopify-Access-Token": '0514001ab15ba1c0957c289ea70b06b5' 
  },
});


const tagManagerArgs = {
  dataLayerName: 'AppDataLayer'
}


const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });



class Product extends React.Component {

	constructor(props) {
    super(props);
		this.lc = new LocalStorage();
     this.state = { 
      project: undefined, 
      selectedOptions: {}, 
      selectedVariantQuantity: 1,
      rating: 0,
      orders: 0,
      displayScrollingATC: false
    };
    
    this.minusQty = this.minusQty.bind(this)
    this.plusQty = this.plusQty.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    // this.updateMetafieldData = this.updateMetafieldData.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onShow = this.onShow.bind(this);


    }

    onHide() {
      // console.log('hide');
      this.setState({displayScrollingATC: true });
    }

    onShow() {
      // console.log('hide');
      this.setState({displayScrollingATC: false });
    }

    componentWillReceiveProps(nextProps) {
      const productId = nextProps.match.params.productId;
      console.log(nextProps);
      this.setItems(productId)

    }

    componentWillMount() {
      window.scrollTo(0,0)
      this.setItems(this.props.productId)

    }


    componentDidMount() {
      console.log(this.props.product);
      console.log(this.state);
      const lcProducts = this.lc.getObject("products");
    if (lcProducts) {
      const currentProduct = lcProducts.find(
        currentProduct =>
        currentProduct.handle === ''
      );
        console.log(currentProduct);
    }
      var url = atob(this.state.product.id);
      // var url = window.location.hostname + '/product' + '/' + this.props.productId
      // console.log(url);
      var numericProductID = url.substr(url.lastIndexOf('/') + 1);
      console.log(numericProductID);
      this.setState({ productID: numericProductID });
      this.setState({displayScrollingATC: false });


      // const GET_METAFIELD_RATING_DATA = `
      // query {
      //   product(id:"${this.state.product.id}") {
      //    metafield(key:"rating", namespace:"rating") {
      //     value
      //   }
      //   }
      // }
      // `;
      // const GET_METAFIELD_ORDER_DATA = `
      // query {
      //   product(id:"${this.state.product.id}") {
      //    metafield(key:"orders", namespace:"orders") {
      //     value
      //   }
      //   }
      // }
      // `;
      //     axiosShopifyGraphQL
      //     .post('', { query: GET_METAFIELD_RATING_DATA })
      //     .then(result => this.updateMetafieldData(result, "rating"));


      //     axiosShopifyGraphQL
      //     .post('', { query: GET_METAFIELD_ORDER_DATA })
      //     .then(result => this.updateMetafieldData(result, "orders"));
   

      //   }

      //   updateMetafieldData(result, type) {
      //     console.log(result);
      //     if (result.data.data.product.metafield !== null && type == "rating") {
      //        this.setState({rating: result.data.data.product.metafield.value})
      //     }

      //     if (result.data.data.product.metafield !== null && type == "orders") {
      //       this.setState({orders: result.data.data.product.metafield.value})

      //    }

   

        }
        

    

    setItems(productId) {
        const lcProducts = this.lc.getObject('products');
        console.log(lcProducts);
        if(!lcProducts) {
        setTimeout(() => {
          window.location.replace(`/product/${productId}`)
        },10000)
        } else {
        const product = lcProducts.find( product => product.handle === productId );
        this.setState({product: product})

        let defaultOptionValues = {};
        if(product) {
          product.options.forEach((selector) => {
            defaultOptionValues[selector.name] = selector.values[0].value;
          });
        }
        this.setState({ selectedOptions: defaultOptionValues });
      }
 
	  }

	findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    const nameSplit = target.name.split('--')
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[nameSplit[0]] = target.value;

    const selectedVariant = client.product.helpers.variantForOptions(this.state.product, selectedOptions)
    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }
  minusQty() {
    this.setState({
      selectedVariantQuantity: (this.state.selectedVariantQuantity) ? Number(this.state.selectedVariantQuantity)-1 : 1
    })
  }
  plusQty() {
    this.setState({
      selectedVariantQuantity: (this.state.selectedVariantQuantity ) ? Number(this.state.selectedVariantQuantity) + 1 : 1
    })
  }
	onATC(variant, variantQuantity, product) {    
    var productObj = product
    console.log(this.state, variant, variantQuantity, product);
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

    this.props.addVariantToCart(variant.id, variantQuantity);

    // console.log(this.state.product.descriptionHtml);

  }
  


  render () {
    const {rating = undefined} = this.state;
    const {orders = undefined} = this.state;
    

    if(this.state.product) {
	let variantImage = this.state.selectedVariantImage || this.state.product.images[0] || null
    let variant = this.state.selectedVariant || this.state.product.variants[0]
    let product = this.state.product
    let savingsPercentage = Math.round(100* (1 - (variant.price / variant.compareAtPrice)))
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.state.product.options.map((option) => {
      return (
        (option.values.length > 1 || (option.values.length === 1 && option.values[0].value !== 'Default Title')) ?
        <span className={`variant_txt ${option.name}Variant`} key={option.id.toString()}>
          <VariantSelector
              handleOptionChange={this.handleOptionChange}
              key={option.id.toString()}
              option={option}
            />
          <br/>
        </span>
        : undefined
      );
    });
    return (
<div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 col-md-7">
        <SingleProduct product={this.state.product}/>
      </div>
      <div className="col-sm-6 col-md-5">
        <div className="pro_right_box">
          <h2>{this.state.product.title}</h2>
          {/* <div className="pro_review"> 
          
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
        />

            <p>{this.state.rating} stars. {this.state.orders} Orders</p>  
          </div>  */}
	 
	 
          <div className="price_cnt">
          <p className="compareAtPrice">${variant.compareAtPrice}</p>
            <p>${variant.price} ({savingsPercentage}% off)</p>
            <p></p>

          </div>
          {(variantSelectors.length > 0 && variantSelectors[0]) ?
          <div className="pro_type">
            <label>Type</label>
            {variantSelectors} </div>
            : null }
          <div className="pro_qyt">
            <label className="Product__quntity"> <span>Quantity</span> </label>
			<div className="pro_qyt_box">
              <button onClick={this.minusQty}><SubtractCircle /></button>
              <input min="1" type="text" value={variantQuantity} onChange={this.handleQuantityChange} disabled/>
              <button  onClick={this.plusQty}><AddCircle /></button>
			  </div>  
		   </div>

          <div className="addbuttonbox">
          <div className="on_page_ATC">
            <button id="addToBagBtn" onClick={
              () => this.onATC(variant, variantQuantity, product)}>Buy Now</button>
          </div>
          </div>
          <IntersectionVisible onHide={ e => this.onHide( e )} onShow={ e => this.onShow( e )}>
          </IntersectionVisible>
          {/* <div className="fr_bog_tgh_cnt">
          
		  <h3>Frequently Bought Togther</h3>
		  <p>Select the items you like and press Add to Bag above or buy all with the button below !</p>
            <ul>
              <li className="active">
                <div className="pro_item">
                  <div className="pro_img"> <i className="fas fa-check-circle"></i><img src={ProductImg1} alt="" /></div>
                  <Link to="/Product">
                  100g Wax Beads - Choose Your Scent!
                  </Link>
                  <div className="p_price">$215</div>
                </div>
              </li>
              <li>
                <div className="pro_item">
                  <div className="pro_img"><i className="fas fa-check-circle"></i><img src={ProductImg1} alt="" /></div>
                  <Link to="/Product">
                  100g Wax Beads - Choose Your Scent!
                  </Link>
                  <div className="p_price">$215</div>
                </div>
              </li>
              <li>
                <div className="pro_item">
                  <div className="pro_img"><i className="fas fa-check-circle"></i><img src={ProductImg1} alt="" /></div>
                  <Link to="/Product">100g Wax Beads - Choose Your Scent!</Link>
                  <div className="setof_pro_type">
                    <select>
                      <option>Set of 12 colors</option>
                      <option>Set of 16 colors</option>
                      <option>Set of 18 colors</option>
                      <option>Set of 24 colors</option>
                    </select>
                  </div>
                  <div className="p_price">$215</div>
                </div>
              </li>
            </ul>
            <div className="buyallcnt">
              <button>Buy All and Save <i className="fas fa-check-circle"></i></button>
            </div>
          </div> */}
          <div className="frewidebox">
            <ul>
              <li> <img src={icon_1} alt="" />
                <p>Free Worldwide Shipping</p>
              </li>
              <li> <img src={icon_2}alt="" />
                <p>Easy Returns</p>
              </li>
              <li> <img src={icon_3} alt="" />
                <p>Human Helpdesk</p>
              </li>
              <li> <img src={icon_4} alt="" />
                <p>Secure Checkout</p>
              </li>
            </ul>
          </div>
 
          {(this.state.product.descriptionHtml.trim() !== '') ?
          <div className="product_detail_cnt">
            <h3>Product Details</h3>
            {renderHTML(this.state.product.descriptionHtml)} 
          </div>
          : null
          }

<div id="freq_bought_together"></div>
        <Loox productID={this.state.productID}/>
        </div>
      </div>
    </div>
  </div>
  {this.state.displayScrollingATC ?
   <FixedATC product={this.state.product} variant={variant} variantSelectors={variantSelectors} variantQuantity={variantQuantity} addVariantToCart={this.props.addVariantToCart} handleQuantityChange={this.handleQuantityChange} minusQty={this.minusQty} plusQty={this.plusQty}></FixedATC> : null}
<IntersectionVisible onShow={ e => this.onShow( e )}>
          </IntersectionVisible>
</div>

);
    } else {
      return (
        <div>
          <h2 className="text-center" style={{minHeight: '200px', fontFamily:"Brandon Grotesque"}}>Loading...</h2>
        </div>
      )
    }
  }
}

export default Product;