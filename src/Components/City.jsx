import React from 'react'
import './City.css'

const City = ({city, feature}) => {
  return (
    <p className='city'>Hello, I am in {city}. It is {feature}.</p>
  )
}

export default City