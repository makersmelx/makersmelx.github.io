import React from 'react';
import { Typography } from '@mui/material';
import { stripTags } from '../../utils/stripTags';
import about from '../../../details/about';

const AboutMe = () => {
  let description = '';
  about.forEach((para) => {
    description = description + para;
  });
  description = stripTags(description);
  const title = about[0]
  const body = about.slice(1)
  return (
    <>
      <h1 className="titleSeparate">{title}</h1>
      <div>
        {
          body.map((paragraph, index) => {
            return (
              <Typography
                gutterBottom
                variant="body1"
                key={index}
              >
                {paragraph}
              </Typography>
            );
          })
        }
      </div>
    </>
  );
};
export default AboutMe;
