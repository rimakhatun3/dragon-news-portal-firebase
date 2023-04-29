import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';


const Header = () => {
  
    return (
       <Container>
         <div className='text-center'>
           <img src={logo} alt="" />
           <p><small>Journalism Without Fear or Favour</small></p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='d-flex border bg-light py-3 px-4 rounded my-2'>
        <Button variant="danger" >latest</Button>
        <Marquee speed='100'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
<div>
  
</div>
        
       </Container>
    );
};

export default Header;