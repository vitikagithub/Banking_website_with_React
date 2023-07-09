import React from 'react'
import Products from './Products'
import BankProd from '../Components/BankProducts.json'
const BankProducts = () => {
  return (
    <div className='BankProducts'>
        {
            BankProd.map((element,index)=>{
                return(
                    <Products 
                    key={index}
                    title={element.Title}
                    img={element.Post}
                    description={element.Desc}
                    />
                )
            })
        }
    </div>
  )
}

export default BankProducts
