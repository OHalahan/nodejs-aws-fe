
const API_PATHS = {
  product: 'https://4wu2eb644j.execute-api.eu-west-1.amazonaws.com/dev',
  order: 'https://4wu2eb644j.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://m4vi868ne8.execute-api.eu-west-1.amazonaws.com/dev',
  bff: 'https://4wu2eb644j.execute-api.eu-west-1.amazonaws.com/dev',
  // Below is Elasticbeanstalk URL but it cannot be used because it is served using HTTP
  // cart: 'http://ohalahan-cart-api-develop.eu-west-1.elasticbeanstalk.com/api',
  // use HTTPS proxy instead
  cart: 'https://no8p3hmfgh.execute-api.eu-west-1.amazonaws.com/develop/api',
};

export default API_PATHS;
