import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import sceond from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaCalendar, FaCalendarCheck, FaCalendarDay, FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';
const EditorInsite = () => {
    return (
       <div>
        <h2 className='mt-5'>EditorInsite</h2>
         <Row xs={1} md={2} lg={3} className="g-4 mt-3">
   
   <Col>
     <Card>
       <Card.Img variant="top" src={first} />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a longer card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
           longer.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
   <Col>
     <Card>
       <Card.Img variant="top" src={sceond} />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a longer card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
           longer.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>
   <Col>
     <Card>
       <Card.Img variant="top" src={third} />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a longer card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
           longer.
         </Card.Text>
       </Card.Body>
     </Card>
   </Col>

</Row>
       </div>
    );
};

export default EditorInsite;