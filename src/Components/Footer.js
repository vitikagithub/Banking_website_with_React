import React from 'react'
import Contact from './Contact.png'
import Feedback from './Feedback.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Feedback} alt='Feedback' />
        <img src={Contact} alt='contact' />
    </div>
  )
}

export default Footer