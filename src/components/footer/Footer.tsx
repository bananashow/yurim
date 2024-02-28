import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SnsButton } from './SnsButton';
import { BsInstagram } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const Footer = () => {
  const navigation = useNavigate();

  return (
    <FooterContainer>
      <LeftSection>
        <div className="hospital-info">
          <div className="top-list">
            <div>개인정보 처리방침</div>
            <span className="bar">|</span>
            <div>이용 약관</div> <span className="bar">|</span>
            <div>고객 불편 사항</div>
          </div>

          <div className="name">
            <strong>유림 더 숲 인테리어</strong>
          </div>
          <div className="info">
            <div>(46562) 부산 북구 만덕3로 27 (만덕동) 1층</div>
            <div>TEL : 010-9151-7941</div>
            <div>E-Mail : sharon1966@hanmail.net</div>
            <div>사업자등록번호 : 895-02-02282</div>
            <div>대표자명 : 이희연</div>
          </div>
        </div>

        <div className="sns-buttons">
          <SnsButton bgColor={'#1EC800'} url="https://blog.naver.com/yurimthesup">
            <SiNaver style={{ fontSize: '22px' }} />
          </SnsButton>
          <SnsButton
            bgColor={
              'radial-gradient(circle farthest-corner at 32% 106%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82%) , linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);'
            }
            url={'https://www.instagram.com/yurimthesup'}
          >
            <BsInstagram />
          </SnsButton>
          <SnsButton bgColor={'#FFCD00'} url="https://open.kakao.com/o/gbjqJ7ud">
            <RiKakaoTalkFill style={{ fontSize: '32px' }} />
          </SnsButton>
        </div>
      </LeftSection>

      <div className="line" />

      <RightSection>
        <div className="tel">
          <div>대표 문의전화</div>
          <div className="tel-number">010.9151.7941</div>
        </div>
        <div className="time">
          <div>
            <h3>WORK</h3>
            <div>- 인테리어 디자이너</div>
            <div>- 공간 색채 구성 컬러리스트</div>
            <div>- 3D max , auto CAD , sketch up</div>
          </div>
          <div>
            <h3>MEMBER</h3>
            <div>👩🏻‍🦰 디자이너_이실장 M. 010-9151-7941</div>
            <div>👨🏻‍🦰 올라운더_송과장 M. 010-9233-4447</div>
          </div>
        </div>

        <div className="admin" onClick={() => navigation('/signin')}>
          관리자 페이지
        </div>
      </RightSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  color: #fff;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 48px 160px;

  @media only screen and (max-width: 1530px) {
    padding: 48px 120px;
  }

  @media only screen and (max-width: 1250px) {
    padding: 48px 50px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 556px) {
    padding: 32px 16px;
    justify-items: center;
  }

  .line {
    width: 1px;
    height: 100%;
    background-color: #555555;
    margin: 0 48px;
  }
`;

const LeftSection = styled.section`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top-list {
    display: flex;
    gap: 4px;
    font-size: 14px;

    div {
      cursor: pointer;
    }

    div:first-child {
      color: ${(props) => props.theme.colors.green};
    }

    div:last-child {
      border: none;
    }

    .bar {
      color: #555555;
    }
  }

  .name {
    margin-top: 14px;
    padding: 16px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;

    img {
      width: 25px;
    }
  }

  .info {
    color: #a5a5a5;
    font-size: 13px;
  }

  .sns-buttons {
    display: flex;
    gap: 8px;
    margin-top: 16px;

    @media only screen and (max-width: 900px) {
      padding: 24px 0;
    }
  }

  @media only screen and (max-width: 556px) {
    width: 100%;

    .top-list {
      font-size: 12px;
    }

    .name {
      font-size: 12px;
      font-size: 14px;
      img {
        width: 12px;
      }
    }

    .info {
      font-size: 12px;
    }
  }
`;

const RightSection = styled.section`
  h3 {
    margin-top: 12px;
    font-size: 16px;
    font-family: 'Pretendard-SemiBold';
  }

  .tel {
    margin-top: 32px;
    .tel-number {
      font-size: 32px;
      font-family: 'Pretendard-ExtraBold';
    }
  }

  .time {
    font-size: 13px;
    display: flex;
    gap: 48px;

    h3 {
      margin-bottom: 4px;
    }

    & > div > div {
      color: #a5a5a5;
    }
  }

  .admin {
    margin-top: 12px;
    font-size: 12px;
    color: #777777;
    cursor: pointer;
  }
`;
