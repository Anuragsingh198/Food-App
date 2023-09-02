import React from 'react'
import FoodType from './FoodType'
import FoodActionOptions from './FoodActionOptions'
import './FoodDataDetail.css'
function HotelFoodDataDetail(props) {
  console.log(props.Name);
  return (
    <div className='Food-Category' id={props.item.Name}>
      
        <div className='Food-Category-Name' >{props.item.Name}</div>
            {props.item.items.map(ite=>
                <div className='Food-Data-Display' key={ite.Name+ite.Description}>
                   <FoodType types={ite.FoodType}></FoodType>
                    <div className='Food-Data-Info'>
                    <div className='Food-Name'>{ite.Name}</div>
                    <div className='Food-Price'>₹{ite.Price}</div>
                    <div className='Food-Price'>{ite.Description}</div>
                    </div>
                        <FoodActionOptions func={props.func} item={ite.Name} Price={ite.Price} Name={props.Name}></FoodActionOptions>
                    
                </div>
               
            )}
             <div className='Food-Line'></div>
    </div>
  )
}

export default HotelFoodDataDetail