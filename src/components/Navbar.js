import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from "@mui/material";

import dobeSilhouette from '../assets/images/dobeSilhouette.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={dobeSilhouette}  alt="logo" style={{width: '80px', height: '80px', margin: "0 20px"}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid  hsla(38, 60%, 74%, 1) ' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar