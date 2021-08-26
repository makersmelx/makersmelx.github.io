import React from 'react';
import { stripTags } from '../../utils/stripTags';
import config from '../../../config';
import SEO from '../../components/Seo';

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
            'NodeJS'
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
    </>
  );
};
export default AboutMe;
