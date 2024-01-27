/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import FoodItem from './FoodItem'
import Error from './Error'

export default function FoodList({item}) {
    // let item = props.item;
    if( item.length===0) {
        return <Error />
    } else {
  return (
    <>
    {/* {console.log(item)} */}
    <div className='container pt-4'>
        <h3 className='pb-3'>Food Items</h3>
        <ul className='list-group'>
            {/* <li className='list-group-item'>{item[0]}</li>
            <li className='list-group-item'>{item[1]}</li>
            <li className='list-group-item'>{item[2]}</li>
            <li className='list-group-item'>{item[3]}</li>
            <li className='list-group-item'>{item[4]}</li> */}
            {
            item.map((x)=> {
                // eslint-disable-next-line react/jsx-key
                return <FoodItem x={x}/>
            })}
        </ul>
      
    </div>
    </>
  )}
}
