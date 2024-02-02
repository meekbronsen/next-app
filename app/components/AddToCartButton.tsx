"use client"; // -- to tell Next include this component in our js bundle

import React from 'react'

const AddToCartButton = () => {
  return (
    <div>
      <button onClick={() => console.log("clicked")}>Add to Cart</button>
    </div>
  )
}

export default AddToCartButton