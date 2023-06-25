import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import dobeSilhouette from '../assets/images/dobeSilhouette.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={dobeSilhouette} alt="logo" style={{ width: '75px', height: '75px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="21px" textAlign="center" pb="40px">Doberman Fitness</Typography>
  </Box>
);

export default Footer;