import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: '887a3c0b9371b412d4fd0b5acb889b18' ,
    domain: 'shop.vincentboscoart.com'
  });

export default client;