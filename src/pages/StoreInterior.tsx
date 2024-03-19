import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';
import { PyButtonGroup } from '../components/common/PyButtonGroup';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY, TABLE } from '../constants/api';
import { getInteriorDatas } from '../api/homeInterior';

export const StoreInterior = () => {
  const { data: interiorList } = useQuery({
    queryKey: [QUERY_KEY.GET_STORE_INTERIOR],
    queryFn: () => getInteriorDatas(TABLE.STORE_INTERIOR),
  });

  return (
    <PageLayout>
      <StoreInteriorContainer>
        <h2>상업 공간 시공</h2>
        <PyButtonGroup />
        <InteriorCardList cardList={interiorList ?? []} />
      </StoreInteriorContainer>
    </PageLayout>
  );
};

const StoreInteriorContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }
`;
