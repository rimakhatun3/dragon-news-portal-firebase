import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
const navigate = useNavigate()
const location = useLocation()
console.log(location)
const from = location.state?.from?.pathname || '/category/0'
  const {logIn} = useContext(AuthContext)
  const handleSignIn=(event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(password,email)
    logIn(email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div className='container w-50 mx-auto border bg-light px-5 py-5'>
           <h3>Login Your Account</h3> 
           <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Your email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='w-100 text-center ' variant="primary" type="submit">
       Login
      </Button>
      <br/>
      <Form.Text className="text-muted">
          Dont have an account please <Link to='/register'>register</Link>
        </Form.Text>
      <Form.Text className="text-muted">
          
        </Form.Text>
    </Form>
        </div>
    );
};

export default Login;