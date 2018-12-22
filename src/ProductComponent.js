import React from 'react'

const ProductComponent = (props) => (
  <div>
    <h3>Product:{props.name}</h3>
    <p>Price: ${props.price}</p>
    <p>Description: {props.description}</p>
  </div>
)
export default ProductComponent