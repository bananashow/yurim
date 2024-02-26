import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';

export const PostDetail = () => {
  return (
    <PageLayout>
      <PostDetailContainer>
        <h2>디테일 페이지</h2>
      </PostDetailContainer>
    </PageLayout>
  );
};

const PostDetailContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }
`;
