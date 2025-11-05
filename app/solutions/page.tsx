import InnovativeSolution from '@/components/InnovativeSolution';
import Solutions from '@/components/Solutions';
import SolutionsOverview from '@/components/SolutionsOverview';
import Roadmap from '@/components/Roadmap';
import React from 'react';

const SolutionsPage = () => {
  return (
    <>
      <Solutions />
      <SolutionsOverview />
      <InnovativeSolution />
      <Roadmap />
    </>
  );
};

export default SolutionsPage;
