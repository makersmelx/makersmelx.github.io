import React from 'react';
import { Card, Layout } from 'antd';
import Header from '../../components/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/Sidebar';
import './index.css';

const InterestCard = (props) => (
  <a
    href={props.url}
    rel="noopener noreferrer"
  >
    <Card
      hoverable
      className={'interest-card'}
      {...props}
      bodyStyle={{
        'padding': '0 0'
      }}
    >
      <h2 className={'interest-title'}>
        {props.interest}
      </h2>
    </Card>
  </a>
);

const Interest = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Fun Facts"
        description=""
        path="funFacts"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Fun Facts</h1>
        </div>
        <InterestCard id={'miku'} interest={'初音ミク'} url={''} />
        <InterestCard id={'wota'} interest={'ヲタ芸'} url={'/blog/wota'} />
      </SidebarWrapper>
    </Layout>
  </Layout>
);
export default Interest;
