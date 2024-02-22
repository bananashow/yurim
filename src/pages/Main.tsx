import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { BestInterior } from '../components/main/BestInterior';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { TEST_SAME_IMAGE_DATA } from '../constants/menu';
import { Instagram } from '../components/main/Instagram';

export const Main = () => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <PageLayout>
      <MainContainer>
        <ImageCarousel slides={TEST_SAME_IMAGE_DATA} options={OPTIONS} />
        <BestInterior />
        <Instagram />
      </MainContainer>
    </PageLayout>
  );
};

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
