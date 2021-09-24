import { Layout } from 'antd';
import Header from '../../components/Header';
import SidebarWrapper from '../../components/Sidebar';
import Experience from './Experience';
import React from 'react';

const Index = () => {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">Experience & Education</h1>
            </div>
            <Experience />
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export default Index;
