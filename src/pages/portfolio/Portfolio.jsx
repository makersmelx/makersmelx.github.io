import React from 'react';
import { Col, Row } from 'antd';
import Config from '../../../config';
import TagCard from '../../components/TagCard';

const Index = () => {
  return (
    <>
      <Row
        justify={'space-around'}
        gutter={[8, 24]}
      >
        {Config.portfolio.map(proj => (
          <Col
            sm={24}
            lg={11}
          >
            <TagCard
              url={proj.url}
              img={proj.img}
              color={proj.color}
              description={proj.description}
              name={proj.name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Index;
