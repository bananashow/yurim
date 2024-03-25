import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { TfiHome } from 'react-icons/tfi';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/api';
import { getPostInfo } from '../api/post';
import { useEffect, useState } from 'react';
import { pyToSquareMeter } from '../utils/format';
import { device } from '../styles/media';

export const PostDetail = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];
  const postId = location.pathname.split('/')[2];
  const [textareaHeight, setTextareaHeight] = useState('auto');

  const { data } = useQuery({
    queryKey: [QUERY_KEY.GET_POST_DETAIL],
    queryFn: () => getPostInfo({ type, postId }),
    select: (data) => data[0],
  });

  useEffect(() => {
    if (data && data.content) {
      const textareaLineHeight = 16;
      const lines = data.content.split('\n').length;
      const newHeight = textareaLineHeight * lines + 'px';
      setTextareaHeight(newHeight);
    }
  }, [data]);

  return (
    <PageLayout>
      <PostDetailContainer>
        <ImageSection>
          {data?.images?.map((image: string, idx: number) => (
            <img src={image} key={idx} alt="인테리어" />
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
                  <td>
                    {data?.area}py [{pyToSquareMeter(data?.area)}㎡]
                  </td>
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
            <textarea value={data?.content} readOnly style={{ height: textareaHeight }}></textarea>
          </div>
        </InfoSection>
      </PostDetailContainer>
    </PageLayout>
  );
};

const PostDetailContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;

  @media ${device.tablet} {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
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

  @media ${device.tablet} {
    order: 2;
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
    cursor: default;
  }

  hr {
    margin: 24px 0;
  }

  h3 {
    margin-bottom: 18px;
    cursor: default;
  }

  table {
    width: 100%;
    font-size: 14px;
    cursor: default;

    td {
      height: 30px;
    }

    td:first-child {
      font-family: Pretendard-SemiBold;
    }
  }

  textarea {
    width: 100%;
    resize: none;
    border: none;
    font-size: 14px;
    outline: none;
    cursor: default;
    overflow: hidden;
  }

  @media ${device.tablet} {
    position: relative;
    margin: 0 auto;
    order: 1;
  }
`;
