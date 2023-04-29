import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
import QZone from '../../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            
           <div>
           <h3>Login With</h3>
           <Button className='mb-2 px-5' variant="outline-primary"> <FaGoogle/>login with goggle</Button> 
      <Button className='px-5' variant="outline-secondary"><FaGithub/> login with github</Button>
           </div>
           <div className='my-4'>
            <h3 className='my-4'>Find Us On</h3>
            <ListGroup>
      <ListGroup.Item><FaFacebook className='mx-2 text-primary'></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className='mx-2 text-primary'></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className='mx-2 text-danger'></FaInstagram> Instra</ListGroup.Item>
    </ListGroup>
           </div>
           <div>
            <QZone></QZone>
           </div>
           <div className='position-relative'>
<img  src={bg} alt="" />
<div className='text-center position-absolute top-0 text-white pt-5  px-3'>
<h3>Create an <br /> Amazing <br /> Newspaper</h3>
<p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
<Button variant="danger" >learn more</Button>

</div>
           </div>
        </div>
    );
};

export default RightNav;