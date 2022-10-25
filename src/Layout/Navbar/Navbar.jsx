import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
           <h3 className='title'> Конвертер Валют</h3>
            <Link className='text' to='/valute'>Валюты</Link>
            <Link className='text' to='/converter'>Конвертер</Link>
        </div>
    );
};

export default Navbar;