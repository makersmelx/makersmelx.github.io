import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import portfolio from '../.././../stuff/portfolio';
import PortfolioCard from '../../components/PortfolioCard';

const Index = () => {
  const Cards = useMemo(() => {
    return portfolio.map((item) => (
      <Grid item xs={12} lg={6}>
        <PortfolioCard item={item} />
      </Grid>
    ));
  }, []);
  return (
    <>
      <Grid
        container
        rowSpacing={3}
        spacing={3}
        justifyContent="space-between"
      >
        {Cards}
      </Grid>
    </>

  );
};

export default Index;
