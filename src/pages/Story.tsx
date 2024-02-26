import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const Story = () => {
  return (
    <PageLayout>
      <StoryContainer>
        <h2>현장 이야기</h2>
      </StoryContainer>
    </PageLayout>
  );
};

const StoryContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    margin-bottom: 40px;
    text-align: center;
  }
`;
