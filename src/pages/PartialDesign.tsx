import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const PartialDesign = () => {
  return (
    <PageLayout>
      <PartialDesignContainer>
        <div>부분 디자인</div>
      </PartialDesignContainer>
    </PageLayout>
  );
};

const PartialDesignContainer = styled.section``;
