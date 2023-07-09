import React from 'react'

const Products = (props) => {
  return (
  
    <div className='products'>
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    
    

    </div>
     
  )
}

export default Products