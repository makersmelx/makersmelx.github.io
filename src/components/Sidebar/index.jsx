import React from 'react';
import { Affix, Col, Layout, Row } from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../utils/hooks';
import Config from '../../../config';

const { Content } = Layout;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Jiayao <strong>Wu</strong>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Graduate Student
      </div>
      <div className="centerAlign box">
        {
          (Object.entries(Config.social)).map(link => {
            return (
              <a href={link[1]} key={link[0]} target="_blank"
                 rel="noopener noreferrer">
                <FA name={link[0]} />
              </a>
            );
          })
        }
      </div>
      <ul className={`box ${style.contactBlock}`}>
        <li className={`${style.contactBlockItem}`} id={'location'}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          Ann Arbor, Michigan
        </li>
        <li className={`${style.contactBlockItem}`} id={'mail'}>
          <span><FeatherIcon size="19" icon="mail" /></span>
          <a
            href="mailto:&#109;&#097;&#107;&#101;&#114;&#115;&#109;&#101;&#108;&#120;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a
          href={Config.resume}
          target="_blank">
          Download Resume
        </a>
      </div>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout
                className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout
              className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
