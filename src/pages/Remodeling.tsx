import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';
import { PyButtonGroup } from '../components/common/PyButtonGroup';

export const Remodeling = () => {
  const TEST_CARDS = [
    { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: '김해 삼계동 부영아파트', py: '24' },
    { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: '김해 삼계동 부영아파트', py: '24' },
    { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: '김해 삼계동 부영아파트', py: '24' },
    { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: '김해 삼계동 부영아파트', py: '24' },
    { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: '김해 삼계동 부영아파트', py: '24' },
  ];

  return (
    <PageLayout>
      <RemodelingContainer>
        <h2>리모델링</h2>
        <PyButtonGroup />
        <InteriorCardList cardList={TEST_CARDS} />
      </RemodelingContainer>
    </PageLayout>
  );
};

const RemodelingContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }
`;
