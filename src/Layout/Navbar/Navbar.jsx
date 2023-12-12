import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {Box, Typography} from "@mui/material";

const Navbar = () => {
    return (
        <Box className='header'>
            <Typography variant={"h6s"} className='title'> Конвертер Валют</Typography>
            <Link className='text' to='/converter'>Конвертер</Link>
            <Link className='text' to='/foodConverter'>КонвертерFood</Link>
        </Box>
    );
};

export default Navbar;
