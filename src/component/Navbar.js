import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/AuthSlice';
import { useEffect } from 'react';
import { addCartTotal } from '../features/cartSlice';

const Navbar = () => {

  const {totalQuantity} = useSelector((state)=>state.allcart)
  const {cart} =useSelector((state)=>state.allcart)


  const authenticate = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(()=>{
    dispatch(addCartTotal(totalQuantity))
},[cart])

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Products</Link>
        </span>
        <MDBBtn color='white'>
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
        {authenticate ? (
          <MDBBtn color='white' onClick={handleLogout}>Logout</MDBBtn>
        ) : (
          <MDBBtn color='white'>
            <Link to="/login">Login</Link>
          </MDBBtn>
        )}
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
