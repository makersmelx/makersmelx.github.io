import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';

import SidebarWrapper from '../../components/Sidebar';
import AboutMe from './AboutMe';

const Index = () => {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SidebarWrapper>
          <>
            <h1 className="titleSeparate">About Me</h1>
            <AboutMe />
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export default Index;
