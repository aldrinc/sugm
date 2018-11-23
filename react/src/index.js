import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './styles/style.css'; 
import './styles/bootstrap.min.css'; 
import './styles/animate.css'; 
import './styles/slick.css'; 
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  gtmId: 'GTM-53KZQ5V',
  dataLayerName: 'CartDataLayer'
}

TagManager.initialize(tagManagerArgs)



const client = Client.buildClient({
  storefrontAccessToken: '5214ca32a041092d1b0992370ee045ad',
  domain: 'shutupandgiftmedev.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);

 