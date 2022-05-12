import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ManageInventory = () => {
    
    const {id} = useParams();
    // const myid = id.split(":");

    const [inventory, setInventory] = useState({})
    const [quant , setQuantity] = useState(0)
    useEffect(() => {
        fetch(`https://peaceful-waters-00676.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(json => {
                setQuantity(json.quantity)
                setInventory(json)})
    }, [])

    
    const update =(e)=>{
        e.preventDefault()
        const url = `https://peaceful-waters-00676.herokuapp.com/product/${id}`;
        const quant = e.target.quantity.value
        const quantity = parseInt(quant) + inventory.quantity
        const formData = {quantity}
        
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(json => {
    
            setQuantity(quantity)
          })
        
      }
      const deliver =(e)=>{
        const url = `https://peaceful-waters-00676.herokuapp.com/product/${id}`;
        const quantity = quant - 1
        const formData = {quantity}
        
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(json => {
    
            setQuantity(quantity)
          })
        
      }
   
    return (
        <div className="container">

            <div className='manage-inventory'>
                <img src={inventory.image} alt="" />
                <div className='product-info'>
                    <h4 className='mb-3'>Name : {inventory.name}</h4>
                    <p>
                        {inventory.description}
                    </p>
                    <h5 className='mt-2'>Quantity : {quant}</h5>
                    <h5 className='mt-2'>Price : $ {inventory.price}</h5>
                    <form onSubmit={update} className="add-quantity">
                        <input name='quantity' type="number" placeholder='Add Quantity' required/>
                        <button type='submit' className='btn btn-primary'>ADD</button>

                    </form>
                    <button onClick={deliver} className='mt-3 btn btn-dark'>Deliver</button>
                </div>
            </div>

            {/* End  */}
        <div className='d-flex justify-content-center mt-5'>
        <Link className='btn-special2' to="/inventory">Manage Inventory</Link> 

        </div>
        </div>
    )
}

export default ManageInventory