import React from 'react';

import GlobalLayout from '../../components/GlobalLayout';
import Portfolio from './Portfolio';
import SEO from '../../components/Seo';

const Index = ({ location }) => {
  return (
    <GlobalLayout location={location}>
      <SEO
        title="Portfolio"
        description="Jiayao Wu's Portfolio"
        path="/portfolio"
      />
      <h1 className="titleSeparate">Portfolio</h1>
      <Portfolio />
    </GlobalLayout>
  );
};

export default Index;
