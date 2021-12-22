import React from 'react';
import { SkeletonCard } from './SkeletonCard/SkeletonCard';
import { SkeletonCardBody, SkeletonCardContainer } from './SkeletonCards.styles';

export const SkeletonCards: React.VFC = () => (
  <SkeletonCardBody>
    {Array(12)
      .fill(<SkeletonCard />)
      .map((card) => (
        <SkeletonCardContainer key={Math.random()}>
          {card}
        </SkeletonCardContainer>
      ))}
  </SkeletonCardBody>
);
