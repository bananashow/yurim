import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { InteriorCardList } from '../components/common/InteriorCardList';
import { PyButtonGroup } from '../components/common/PyButtonGroup';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY, TABLE } from '../constants/api';
import { getInteriorDatas } from '../api/post';

export const HomeInterior = () => {
  const { data: interiorList } = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_INTERIOR],
    queryFn: () => getInteriorDatas(TABLE.HOME_INTERIOR),
  });

  return (
    <PageLayout>
      <HomeInteriorContainer>
        <h2>주거 공간 시공</h2>
        <PyButtonGroup />
        <InteriorCardList cardList={interiorList ?? []} />
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
