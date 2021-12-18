import React from 'react';
import GlobalLayout from '../../components/GlobalLayout';

import AboutMe from './AboutMe';
import SEO from '../../components/Seo';

const Index = ({ location }) => {
  return (
    <GlobalLayout location={location}>
      <SEO
        title="About Me"
        description="Self Introduction"
        path="/"
      />
      <h1 className="titleSeparate">About Me</h1>
      <AboutMe />
    </GlobalLayout>
  );
};

export default Index;
