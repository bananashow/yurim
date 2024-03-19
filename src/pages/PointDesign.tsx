import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY, TABLE } from '../constants/api';
import { getInteriorDatas } from '../api/homeInterior';

export const PointDesign = () => {
  const { data: interiorList } = useQuery({
    queryKey: [QUERY_KEY.GET_POINT_INTERIOR],
    queryFn: () => getInteriorDatas(TABLE.POINT_INTERIOR),
  });

  return (
    <PageLayout>
      <PartialDesignContainer>
        <h2>포인트 디자인</h2>
        <InteriorCardList cardList={interiorList ?? []} />
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
