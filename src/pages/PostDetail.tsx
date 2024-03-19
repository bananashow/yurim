import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { TfiHome } from 'react-icons/tfi';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/api';
import { getPostInfo } from '../api/homeInterior';

export const PostDetail = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];
  const postId = location.pathname.split('/')[2];

  const { data } = useQuery({
    queryKey: [QUERY_KEY.GET_POST_DETAIL],
    queryFn: () => getPostInfo({ type, postId }),
    select: (data) => data[0],
  });

  return (
    <PageLayout>
      <PostDetailContainer>
        <ImageSection>
          {data?.images?.map((image: string) => (
            <img src={image} alt="인테리어" />
          ))}
        </ImageSection>
        <InfoSection>
          <h2>
            <TfiHome />
            <span>김해 삼계동 부영아파트</span>
          </h2>
          <hr />

          <div>
            <h3>OVERVIEW</h3>
            <table>
              <tbody>
                <tr>
                  <td>PROJECT</td>
                  <td>{data?.project}</td>
                </tr>
                <tr>
                  <td>SITE</td>
                  <td>{data?.site}</td>
                </tr>
                <tr>
                  <td>AREA</td>
                  <td>{data?.area}py [105㎡]</td>
                </tr>
                <tr>
                  <td>KEYWORD</td>
                  <td>{data?.keyword}</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>

          <div>
            <h3>{data?.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
          </div>
        </InfoSection>
      </PostDetailContainer>
    </PageLayout>
  );
};

const PostDetailContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
`;

const ImageSection = styled.article`
  width: 100%;
  display: grid;
  gap: 24px;

  img {
    width: 100%;
    height: auto;
    min-height: 350px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    border-radius: 4px;
  }
`;

const InfoSection = styled.article`
  width: fit-content;
  min-width: 350px;
  height: fit-content;
  position: sticky;
  top: 0;

  h2 {
    font-size: 28px;
    margin-top: 36px;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  hr {
    margin: 24px 0;
  }

  h3 {
    margin-bottom: 18px;
  }

  table {
    width: 100%;
    font-size: 14px;

    td {
      height: 30px;
    }

    td:first-child {
      font-family: Pretendard-SemiBold;
    }
  }

  p {
    font-size: 14px;
  }
`;
