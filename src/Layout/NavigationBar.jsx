import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
  }
    return (

        <div>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/category/0'>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrer</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#pricing"><FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle></Nav.Link>

          {user?<><Button onClick={handleLogOut}>Logout</Button></>:<><Link to='/login'> <Button variant="dark" >Login</Button></Link></>}
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;