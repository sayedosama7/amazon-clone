import React from "react";
import { Col, Container , Row  } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ProjectProductPage.css'
import "bootstrap/dist/css/bootstrap.min.css";
function ProductTypes() {
return (
    <>
        <Container >
        <Link to='/'><img className='logoo' src='/Images/logo2.png' alt='' /></Link>
        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'  >
            <img src="/Images/ProductTypePhones/Honor.jpg" alt='' />
            <p>Honor</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/huawei.jpg" alt='' />
            <p>huawei</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/iphone.jpg" alt='' />
            <p>iphone</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/Nokia.jpg" alt='' />
            <p>Nokia</p>
            </Link>
        </Col>
        </Row>

        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/Oppo.jpg" alt='' />
            <p>Oppo</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/Realme.jpg" alt='' />
            <p>Realme</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/samsung.jpg" alt='' />
            <p>samsung</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link to='/Phones'>
            <img src="/Images/ProductTypePhones/Xiaomi.jpg" alt='' />
            <p>Xiaomi</p>
            </Link>
        </Col>
        </Row>
        </Container >
    </>
);
}
export default ProductTypes;