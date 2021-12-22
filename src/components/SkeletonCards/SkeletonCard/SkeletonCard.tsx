import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  SkeletonCardBodyWrapper, SkeletonCardHeader, SkeletonCardImageWrapper, SkeletonCardInfoWrapper,
} from '../SkeletonCards.styles';
import { colors } from '../../common/theme';

export const SkeletonCard:React.FC = () => (
  <>
    <SkeletonCardHeader>
      <SkeletonTheme baseColor={`${colors.gray_light}`} highlightColor={`${colors.blue_sky}`}>
        <Skeleton wrapper={SkeletonCardImageWrapper} height={48} width={48} circle />
      </SkeletonTheme>
      <SkeletonCardInfoWrapper>
        <SkeletonTheme baseColor={`${colors.gray_light}`} highlightColor={`${colors.blue_sky}`}>
          <Skeleton width={160} />
          <Skeleton width={238} />
        </SkeletonTheme>
      </SkeletonCardInfoWrapper>
    </SkeletonCardHeader>
    <SkeletonCardBodyWrapper>
      <SkeletonTheme baseColor={`${colors.gray_light}`} highlightColor={`${colors.blue_sky}`}>
        <Skeleton width={342} height={20} />
        <Skeleton width={342} height={21} />
      </SkeletonTheme>
    </SkeletonCardBodyWrapper>
  </>
);
