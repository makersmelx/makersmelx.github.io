import React from 'react';
import {Layout, Card, Row} from 'antd';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
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
            'padding': '0 0',
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
            title="Interest"
            description=""
            path="interest"
        />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Interest</h1>
          </div>
          <InterestCard id={'miku'} interest={'初音ミク'} url={''} />
          <InterestCard id={'wota'} interest={'ヲタ芸'} url={'/blog/wota'} />
        </SidebarWrapper>
      </Layout>
    </Layout>
);
export default Interest;
