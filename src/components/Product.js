// Code Product Component Here
import React from 'react'

class Product extends React.component {

  render(){
    return {
      <div>Product</div>
    }
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'salmon',
    'eggshell-white',
    'white'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined){
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
    
  },
}

Product.defaultProps{
  hasWatermark: false
}


export default Product
