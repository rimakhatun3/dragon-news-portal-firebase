import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
const {createUser} = useContext(AuthContext)
const [acceted,setAccepted] = useState(false)
  const handleResister=(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password)

    createUser(email,password)
    .then(result=>{
      const user= result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })

  }

  const handleAccepted=(event)=>{
    setAccepted(event.target.checked)
  }

    return (
        <div className='container w-50 mx-auto border bg-light px-5 py-5'>
           <h3>Register your account</h3> 
           <Form onSubmit={handleResister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Your photoURL" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter Your email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} 
         type="checkbox"
          label={<>accept <Link to ='/terms'>terms and condition</Link></>} />
      </Form.Group>
      <Button className='w-100 text-center ' disabled={!acceted} variant="primary" type="submit">
       Register
      </Button>
      <br/>
      <Form.Text className="text-muted">
          Already have an account please <Link to='/login'>Login</Link>
        </Form.Text>
      <Form.Text className="text-muted">
          
        </Form.Text>
    </Form>
        </div>
    );
};

export default Register;