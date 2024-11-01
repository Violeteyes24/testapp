'use client'; // client side rendering
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-primary' onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
// most route and pages on app router are server side rendering