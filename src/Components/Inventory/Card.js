import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <div className='inventory-card'>   
    <div style={{ 
      backgroundImage: `url(${props.image})` 
    }} className='inv-image'></div>
    {/* image end  */}
    <p>Name : {props.name.slice(0 , 20)}</p>
    <p>Suplier : {props.suplier}</p>
    <p>Price : {props.price}</p>
    <p>Quantity : {props.quantity}</p>
    <p>{props.desc.length > 100 ? props.desc.slice(0 , 100)+ "..." : props.desc } </p>
   <Link to={`/inventory/${props.to}`} className="btn-special2">Update</Link>
    </div>
  )
}

export default Card