import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            LANDING PAGE!
            <Link to="employee-attrition">Employee Attrition</Link>
        </div>);
};

export default LandingPage;