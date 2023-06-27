import React from 'react'
import { Box, Stack, Typography,  Button } from "@mui/material";

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box 
      sx={{
      mt: { lg: "212px", xs: "70px"},
      ml: { sm: "50px"}
      }} position="relative" p="20px">
      <Typography 
        color="white"
        fontweight="600"
        fontSize="56px"
        fontFamily="satoshi"
      >
        Get Swole Gym
      </Typography>
      <Typography color="white" fontFamily="satoshi" fontWeight={700} sx={{ fontSize: { lg: '94px', xs: '90px' } }} mb="23px" mt="10px">
        Sweat, Smile, <br /> and Repeat
      </Typography>
      <Typography fontSize="32px" color="white" fontFamily="satoshi" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href='#exercises' sx={{ backgroundColor: "#ff2625", p:'10px'}}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="white" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '300px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner