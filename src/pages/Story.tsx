import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const Story = () => {
  return (
    <PageLayout>
      <StoryContainer>
        <div>현장 이야기</div>
      </StoryContainer>
    </PageLayout>
  );
};

const StoryContainer = styled.section``;
