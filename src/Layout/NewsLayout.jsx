import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        
        <Col lg={9}><Outlet/></Col>
        <Col lg={3}><RightNav></RightNav></Col>
      </Row>
      
    </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;