import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { BestInterior } from '../components/main/BestInterior';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { TEST_SAME_IMAGE_DATA } from '../constants/menu';
import { Instagram } from '../components/main/Instagram';
import { KakaoMap } from '../components/main/KakaoMap';
import { LOCATION } from '../constants/location';

export const Main = () => {
  return (
    <PageLayout>
      <MainContainer>
        <ImageCarousel slides={TEST_SAME_IMAGE_DATA} />
        <BestInterior />
        <Instagram />
        <KakaoMap geoCode={[...LOCATION]} />
      </MainContainer>
    </PageLayout>
  );
};

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
