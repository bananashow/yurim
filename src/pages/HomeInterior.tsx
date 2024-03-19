import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';
import { PyButtonGroup } from '../components/common/PyButtonGroup';

export const HomeInterior = () => {
  const TEST_CARDS = [
    {
      id: 1,
      type: 'home',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 2,
      type: 'home',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 3,
      type: 'home',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 4,
      type: 'home',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
    {
      id: 5,
      type: 'home',
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: '김해 삼계동 부영아파트',
      py: '24',
    },
  ];

  return (
    <PageLayout>
      <HomeInteriorContainer>
        <h2>주거 공간 시공</h2>
        <PyButtonGroup />
        <InteriorCardList cardList={TEST_CARDS} />
      </HomeInteriorContainer>
    </PageLayout>
  );
};

const HomeInteriorContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }
`;
