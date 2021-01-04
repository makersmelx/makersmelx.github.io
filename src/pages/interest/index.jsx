import React from 'react';
import {Layout, Card, Row} from 'antd';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import './index.css';

const InterestCard = (props) => (
    <Card
        hoverable
        className={'interest-card'}
        {...props}
        bodyStyle={{
          'padding': '0 0',
        }}
    >
      <h2 className={'interest-title'}>
        {props.interestName}
      </h2>
    </Card>
);

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
          <InterestCard id={'miku'} interestName={'初音ミク'} />
          <InterestCard id={'wota'} interestName={'ヲタ芸'} />
        </SidebarWrapper>
      </Layout>
    </Layout>
);
export default Interest;
