import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { TfiHome } from 'react-icons/tfi';

export const PostDetail = () => {
  // 주소(SITE), 평수(AREA), 예산, 제목, 내용
  return (
    <PageLayout>
      <PostDetailContainer>
        <ImageSection>
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
          <img src="" alt="인테리어" />
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
                  <td>APT</td>
                </tr>
                <tr>
                  <td>SITE</td>
                  <td>김해시 삼계로 232</td>
                </tr>
                <tr>
                  <td>AREA</td>
                  <td>32py [105㎡]</td>
                </tr>
                <tr>
                  <td>KEYWORD</td>
                  <td>모던, 심플</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>

          <div>
            <h3>김해시 삼계동 아파트 인테리어 - 현대아이파크</h3>
            <p>
              모던하고 심플한 디자인으로 공간 구획부터 레이아웃까지 변경해 고급스럽게
              <br />
              다시 태어난 현대아이파크 입니다.
              <br />
              <br />
              특히 기존 샤시를 제거한 뒤 목작업을 통해 완성한
              <br />
              소파월은 라운드 형식으로 포인트를 주고 히든 장을 같이 설계했어요.
              <br />
              <br />
              모던하고 심플한 디자인으로 공간 구획부터 레이아웃까지 변경해 고급스럽게
              <br />
              다시 태어난 현대아이파크 입니다.
              <br />
              <br />
              특히 기존 샤시를 제거한 뒤 목작업을 통해 완성한
              <br />
              소파월은 라운드 형식으로 포인트를 주고 히든 장을 같이 설계했어요.
              <br />
            </p>
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
    border: 1px solid tan;
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
`;
