import React, { useContext } from "react";
import CartContext from "../CartContext";
import { Container, Row,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './CheckOut.css'
import CheckOutProducts from "./CheckOutProducts";
function Checkout() {
  const { items } = useContext(CartContext);
  return (
    <section className="products">
          {items?.length === 0 ?(
            <>
              <Link to='/'> <img className="photo" src="/Images/logo2.png"  alt=''/> </Link>
              <div className='ifEmpty'>
              <h1>Your Cart is Empty</h1>
              <p>You have no items in your basket. To buy one or more items, click "Add To Cart" under to the item.</p>
              <Link  className='shoppingButton2'  to='/MobilePhones'>
              <Button className='shoppingButton1' variant="primary">Back To Products</Button></Link>
              </div>
              </>)
              : (

              <div>
              <Container>
              <Row  className="products">
              <h1>Shopping Cart</h1>
              <CheckOutProducts />
              </Row>
              </Container>
              </div>
                )}
    </section>
  );
}

export default Checkout;
