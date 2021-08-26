import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';

import SidebarWrapper from '../../components/Sidebar';
import AboutMe from './AboutMe';
import Experience from './Experience';

const Index = () => {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SidebarWrapper>
          <>
            <AboutMe />
            <Experience />
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export default Index;
