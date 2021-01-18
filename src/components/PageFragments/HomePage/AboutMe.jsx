import React from 'react';
import {stripTags, domHtml} from '../../../utils/stripTags';
import config from '../../../../config';
import SEO from '../../Seo';

const AboutMe = () => {
  let description = '';
  (config.aboutMe).forEach((para) => {
    description = description + para;
  });
  description = stripTags(description);
  return (
      <>
        <div>
          <SEO
              title="About"
              description={description}
              path=""
              keywords={[
                'Jiayao',
                'Mike',
                'Javascript',
                'ReactJS',
                'NodeJS',
              ]}
          />
          <h1 className="titleSeparate">About Me</h1>
          {
            config.aboutMe.map((para, index) => {
              return (
                  <p key={index}>{para}</p>
              );
            })
          }
        </div>
        {/*<Row gutter={[20, 20]}>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="location.png"*/}
        {/*        height={60}*/}
        {/*        alt="location image"*/}
        {/*        textH4="Born and bought up in"*/}
        {/*        textH3="Mangalore, KA, India"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="coffee.png"*/}
        {/*        alt="coffee image"*/}
        {/*        textH4="Love Coffee"*/}
        {/*        textH3="Coffee + Me = Happiness"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="meeting.png"*/}
        {/*        alt="meeting image"*/}
        {/*        textH4="Socially Awkward"*/}
        {/*        textH3="At times"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="motorcycle.png"*/}
        {/*        alt="motorcycle image"*/}
        {/*        textH4="Love Riding"*/}
        {/*        textH3="Biker for life"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="web.png"*/}
        {/*        alt="web image"*/}
        {/*        textH4="Self Taught Programmer"*/}
        {/*        textH3="Thanks to the Web Resources"*/}
        {/*        height={60}*/}
        {/*        width={60}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col xs={24} sm={24} md={12} lg={8}>*/}
        {/*    <AboutTile*/}
        {/*        img="graduation.png"*/}
        {/*        alt="graduation image"*/}
        {/*        textH4="Pursued B.Tech in"*/}
        {/*        textH3="Computer Science"*/}
        {/*        height={60}*/}
        {/*        width={60}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </>
  );
};
export default AboutMe;
