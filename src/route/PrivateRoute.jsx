import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,lodding} = useContext(AuthContext)
if(lodding){
    return <Spinner animation="border"  role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
}

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;