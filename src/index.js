import React from 'react';
import ReactDOM from 'react-dom';

import Product from './components/Product';

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.isRequired,
}

Product.defaultProps{
  hasWatermark: false
}


ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={210}
  />,
  document.getElementById('global')
);
