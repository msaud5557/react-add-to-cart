import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { addCartTotal,removeItem,increaseItem,decreaseItem } from '../features/cartSlice';
import {useEffect } from "react"

 
const CartPage = () => {

const { cart,totalQuantity ,totalPrice}= useSelector((state)=>state.allcart)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(addCartTotal())
},[cart])

return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Total Quantity :{totalQuantity}</h5>
                </div>

                <div className="card-body">
                  {/* Cart Item 1 */}
                  { cart.map((data)=>{
                    return (
                        <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={data.img} alt="xyx" className="w-100" />
                        <a href="#!">
                          <div className="mask"></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>Name :{data.name}</strong></p>
                      <p>Color: {data.color}</p>
                      
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remove item" onClick={()=>dispatch(removeItem(data.id))}>
                        <i className="fas fa-trash"></i>
                      </button>
                      
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4">
                        <button className="btn btn-primary px-3 me-2" onClick={()=>dispatch(decreaseItem(data.id))} >
                          <i className="fas fa-minus" ></i>
                        </button>
                        <div className="form-outline">
                          <input id="form1" name="quantity" value={data.quantity} onChange={()=>null} type="number" 
                          

                          className="form-control" />
                          <label className="form-label" htmlFor="form1">Quantity</label>
                        </div>
                        
                        <button className="btn btn-primary px-3 ms-2" onClick={()=>dispatch(increaseItem(data.id))} >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong>{data.price}</strong>
                      </p>
                    </div>
                  </div>
                    )

                  })  }
                  
                  <hr className="my-4" />
                  {/* Cart Item 2 */}
                  
                </div>
              </div>
              
              
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span><strong>{totalPrice}</strong></span>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
