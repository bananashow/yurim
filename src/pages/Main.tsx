import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { BestInterior } from '../components/main/BestInterior';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { Instagram } from '../components/main/Instagram';
import { KakaoMap } from '../components/main/KakaoMap';
import { LOCATION } from '../constants/location';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/api';
import { getCarouselData } from '../api/carousel';
import { CarouselData } from '../types/carousel';

export const Main = () => {
  const { data: carouselData } = useQuery<CarouselData[]>({
    queryKey: [QUERY_KEY.GET_CAROUSEL_DATA],
    queryFn: getCarouselData,
  });

  return (
    <PageLayout>
      <MainContainer>
        {carouselData && <ImageCarousel slides={carouselData} />}
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
