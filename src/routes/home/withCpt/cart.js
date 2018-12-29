import WithLogin from './withLogin';

const ShoppingCart = WithLogin(() => {
  return 'cart';
});

export default ShoppingCart;

