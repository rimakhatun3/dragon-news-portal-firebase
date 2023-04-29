import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1> accept terms and conditaion</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nesciunt inventore, est et voluptatibus ut. Adipisci, officia beatae facilis quia sunt explicabo eum itaque unde.</p>
            <p>go back to <Link to='/register'>Resister</Link></p>
        </div>
    );
};

export default Terms;