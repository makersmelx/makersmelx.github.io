import React from 'react';
import { Layout } from 'antd';
import { createTheme, ThemeProvider } from '@mui/material';

import Header from '../../components/Header';
import SidebarWrapper from '../../components/Sidebar';
import Portfolio from './Portfolio';

const Index = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },

  });
  return (
    <ThemeProvider theme={theme}>
      <Layout className="outerPadding">
        <Layout className="container">
          <Header />
          <SidebarWrapper>
            <>
              <h1 className="titleSeparate">Portfolio</h1>
              <Portfolio />
            </>
          </SidebarWrapper>
        </Layout>
      </Layout>
    </ThemeProvider>

  );
};

export default Index;
