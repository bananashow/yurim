import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';

export const PointDesign = () => {
  const TEST_CARDS = [
    {
      id: 1,
      type: 'point',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 2,
      type: 'point',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 3,
      type: 'point',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 4,
      type: 'point',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 5,
      type: 'point',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
  ];

  return (
    <PageLayout>
      <PartialDesignContainer>
        <h2>포인트 디자인</h2>
        <InteriorCardList cardList={TEST_CARDS} />
      </PartialDesignContainer>
    </PageLayout>
  );
};

const PartialDesignContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    margin-bottom: 40px;
    text-align: center;
  }
`;
