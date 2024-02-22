import styled from 'styled-components';
import { InteriorCard } from './InteriorCard';
import { CardInfo } from '../../types/card';

export const InteriorCardList = ({ cardList }: { cardList: CardInfo[] }) => {
  return (
    <CardListWrap>
      {cardList.map((card: CardInfo) => (
        <InteriorCard img={card.img} title={card.title} py={card.py} />
      ))}
    </CardListWrap>
  );
};

const CardListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
