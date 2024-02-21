import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const Main = () => {
  return (
    <PageLayout>
      <MainContainer>
        <div>메인</div>
      </MainContainer>
    </PageLayout>
  );
};

const MainContainer = styled.section``;
