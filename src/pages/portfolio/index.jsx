import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';

import SidebarWrapper from '../../components/Sidebar';
import Portfolio from './Portfolio';

const Index = () => {
  return (
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
  );
};

export default Index;
