import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import { Tab, Tabs, Typography } from '@mui/material';

export default ({ location }) => {
  let initValue = '/';
  Object.values(Config.pages).forEach(item => {
    if (location && location.pathname && location.pathname.indexOf(item) >= 0) {
      initValue = item;
    }
  });
  useEffect(() => {
    setValue(initValue);
  }, [location]);
  const [value, setValue] = useState(
    location && location.state && location.state.from
      ? location.state.from
      : initValue);
  return (
    <Tabs value={value} sx={{ marginLeft: 'auto' }}>
      {
        (Object.entries(Config.pages)).map((page, index) => {
          return (
            <Tab
              value={page[1]}
              key={page[0]}
              label={
                <Link
                  color="rgba(0,0,0,0.6)"
                  to={page[1]}
                  state={{
                    from: location && location.pathname
                      ? location.pathname
                      : '/'
                  }}
                  isPartiallyCurrent
                >
                  <Typography
                    color={value === page[1]
                      ? 'primary.main'
                      : 'text.secondary'}
                  >
                    {page[0]}
                  </Typography>
                </Link>}
            />
          );
        })
      }
    </Tabs>
  );
};
