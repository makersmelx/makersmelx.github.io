import React from 'react';
import {Col, Layout, Row} from 'antd';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';

const Interest = () => (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
            title="Interest"
            description=""
            path="interest"
        />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Interest</h1>
          </div>
          {/*  content here*/}
        </SidebarWrapper>
      </Layout>
    </Layout>
);
export default Interest;
