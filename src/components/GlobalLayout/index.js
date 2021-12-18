import React from 'react';

import Header from '../Header';
import SidebarWrapper from '../Sidebar';
import { Stack } from '@mui/material';

const Index = ({ children, location }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
      }}
    >
      <Stack
        sx={{
          width: '80%',
        }}
        spacing={2}
        alignItems="center"
      >
        <Header location={location} />
        <SidebarWrapper>
          {children}
        </SidebarWrapper>
      </Stack>
    </Stack>

  );
};

export default Index;
