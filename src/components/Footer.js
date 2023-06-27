import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import dobeSilhouette from '../assets/images/dobeSilhouette.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="1px" mb="-40px">
      <img src={dobeSilhouette} alt="logo" style={{ width: '150px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '38px', xs: '40px' } }} mt="0px" textAlign="center" pb="40px">Get Swole Gym</Typography>
  </Box>
);

export default Footer;