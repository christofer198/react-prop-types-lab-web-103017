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
  color: PropTypes.string.isRequired,
}

Product.defaultProps{
  hasWatermark: false
}


export default Product
