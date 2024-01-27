// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function FoodItem({ x }) {
  return (
    <>
      <li key={x} className='list-group-item'>{x}</li>
    </>
  )
}
