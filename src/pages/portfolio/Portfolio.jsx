import React, { useMemo, useState } from 'react';
import { Chip, Collapse, Divider, Fade, Grid, Typography } from '@mui/material';
import { Check, Computer, Widgets } from '@mui/icons-material';

import portfolio from '../.././../stuff/portfolio';
import PortfolioCard from '../../components/PortfolioCard';

const Index = () => {
  const [tech, setTech] = useState({});
  const [category, setCategory] = useState({});

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

  const tagsFromSets = (inputSet, stateValue, setFunc) => {
    const Tags = Array.from(inputSet).sort().map((tag) => (
      <Grid item>
        <Chip
          icon={
            <Collapse
              style={{ height: '100%' }}
              orientation="horizontal"
              in={stateValue && stateValue[tag]}
            >
              <Check style={{ marginTop: '20%' }} />
            </Collapse>
          }
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
    const clearAll = () => {
      setFunc(prev => {
        return {};
      });
    };
    return (
      <>
        {Tags}
        {Cards.length < portfolio.length && <Grid item xs="auto">
          <Collapse
            orientation="horizontal"
            in={Cards.length < portfolio.length}
            appear
          >
            <Chip
              label={<Typography sx={{ fontWeight: 500 }}>
                Clear all
              </Typography>}
              key="clear all"
              color="error"
              onDelete={clearAll}
              onClick={clearAll}
              variant={'outlined'}
            />
          </Collapse>
        </Grid>
        }
      </>
    );
  };

  const techTags = useMemo(() => tagsFromSets(techTagSet, tech, setTech),
    [tech]);
  const categoryTags = useMemo(
    () => tagsFromSets(categoryTagSet, category, setCategory),
    [category]);

  return (
    <>
      <Grid container spacing={1} mt={2} alignItems="center" rowSpacing={1}>
        <Grid item sx={{ marginRight: 1 }}>
          <Widgets />
        </Grid>
        {categoryTags}
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid container spacing={1} mt={2} alignItems="center" rowSpacing={1}>
        <Grid item sx={{ marginRight: 1 }}>
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
