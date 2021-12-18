import React from 'react';
import GlobalLayout from '../../components/GlobalLayout';

import Experience from './Experience';
import SEO from '../../components/Seo';

const Index = ({ location }) => {
  return (
    <GlobalLayout location={location}>
      <SEO
        title="Experience"
        description="Jiayao Wu's work experience and education experience"
        path="/experience"
      />
      <div className="marginTopTitle">
        <h1 className="titleSeparate">Experience & Education</h1>
      </div>
      <Experience />
    </GlobalLayout>
  );
};

export default Index;
