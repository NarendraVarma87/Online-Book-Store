import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
const NotFoundPage = () => {
    return (
        <div className="text-center" id='notFound'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;
