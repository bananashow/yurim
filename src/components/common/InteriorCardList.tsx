import styled from 'styled-components';
import { InteriorCard } from './InteriorCard';
import { CardInfo } from '../../types/card';
import { device } from '../../styles/media';

export const InteriorCardList = ({ cardList }: { cardList: CardInfo[] }) => {
  return (
    <CardListWrap>
      {cardList.map((card: CardInfo) => (
        <InteriorCard key={card.id} {...card} />
      ))}
    </CardListWrap>
  );
};

const CardListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;
