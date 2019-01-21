import React, { Component } from 'react';
import Products from '../Products';
import IntersectionVisible    from 'react-intersection-visible';
import TagManager from 'react-gtm-module';

import Story from './Story'; 
import Banner from './banner';  
const tagManagerArgs = {
  dataLayerName: 'AppDataLayer'
}

class Index extends Component {

  onShow( entries )
  {
      // do something
      var impressions = []
      this.props.bestProducts.forEach(function (product, i) {
        impressions.push({
          'name': product.title,       // Name or ID is required.
       'id': product.id,
       'price': product.variants[0].price,
       'brand': product.vendor,
       'variant': product.variants[0].title,
       'list': 'Homepage Products Display',
       'position': i + 1
        }) 
      });

      tagManagerArgs.dataLayer = {
        'event' : 'productHomepageDisplayImpression',
        'ecommerce': {
          'impressions': impressions
        }


      }

      TagManager.dataLayer(tagManagerArgs)

  }


  render() {
    return (
      <div className="App">
        <Banner/> 
        <IntersectionVisible onShow={ e => this.onShow( e ) }>
         <Products
          bestProducts={this.props.bestProducts}
          artProducts={this.props.artProducts}
          addVariantToCart={this.props.addVariantToCart}
        /> </IntersectionVisible>      
		<Story/>
		 
      </div>
    );
  }
}

export default  Index;
