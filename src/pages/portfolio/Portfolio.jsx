import React, { useMemo, useState } from 'react';
import { Chip, Divider, Fade, Grid, Typography } from '@mui/material';
import { Computer, Widgets } from '@mui/icons-material';

import portfolio from '../.././../stuff/portfolio';
import PortfolioCard from '../../components/PortfolioCard';

const Index = () => {
  const [tech, setTech] = useState({});
  const [category, setCategory] = useState({});
  const techTagSet = new Set();
  const categoryTagSet = new Set();
  portfolio.forEach(item => {
    if (item && item.tags) {
      if (item.tags.tech) {
        item.tags.tech.forEach(tag => {
          techTagSet.add(tag);
        });
      }
      if (item.tags.category) {
        item.tags.category.forEach(tag => {
          categoryTagSet.add(tag);
        });
      }
    }
  });

  const filterFunc = (item, name, stateValue) => {
    if (item && item.tags && item.tags[name] && item.tags[name]) {
      for (const key of Object.keys(stateValue)) {
        if (stateValue[key] && !item.tags[name].find(e => e === key)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const tagsFromSets = (inputSet, stateValue, setFunc) => {
    return Array.from(inputSet).sort().map((tag) => (
      <Grid item>
        <Chip
          label={<Typography sx={{ fontWeight: 500 }}>
            {tag}
          </Typography>}
          key={tag}
          onClick={() => {
            setFunc(prev => {
              return {
                ...prev,
                [tag]: !prev[tag]
              };
            });
          }}
          variant={stateValue && stateValue[tag] ? 'filled' : 'outlined'}
        />
      </Grid>
    ));
  };

  const techTags = useMemo(() => tagsFromSets(techTagSet, tech, setTech),
    [tech]);
  const categoryTags = useMemo(
    () => tagsFromSets(categoryTagSet, category, setCategory),
    [category]);

  const Cards = portfolio.filter(item => filterFunc(item, 'tech', tech))
  .filter(item => filterFunc(item, 'category', category))
  .map((item) => {
    const fadeIn = filterFunc(item, 'tech', tech) && filterFunc(item,
      'category', category);
    return (
      <Fade in={fadeIn} appear>
        <Grid item xs={12} lg={6} key={item.name}>
          <PortfolioCard item={item} />
        </Grid>
      </Fade>
    );
  });

  return (
    <>
      <Grid container spacing={1} mt={2} alignItems="center" rowSpacing={1}>
        <Grid item>
          <Widgets />
        </Grid>
        {categoryTags}
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid container spacing={1} mt={2} alignItems="center" rowSpacing={1}>
        <Grid item>
          <Computer />
        </Grid>
        {techTags}
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid
        container
        rowSpacing={3}
        spacing={3}
        justifyContent="space-between"
        mt={1}
      >
        {Cards}
      </Grid>
    </>
  );
};

export default Index;
