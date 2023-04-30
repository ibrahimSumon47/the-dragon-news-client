import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe reprehenderit et recusandae, vel aperiam eveniet laboriosam odio fuga atque repellat pariatur nostrum ipsam adipisci minus voluptatem, corrupti accusamus repudiandae?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;