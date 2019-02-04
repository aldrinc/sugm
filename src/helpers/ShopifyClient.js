import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: 'a6ec793947e183db8eca2d0549e3c348' ,
    domain: 'bpoco.myshopify.com'
  });

export default client;