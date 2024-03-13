import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SnsButton } from './SnsButton';
import { BsInstagram } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { device } from '../../styles/media';

export const Footer = () => {
  const navigation = useNavigate();

  return (
    <FooterContainer>
      <LeftSection>
        <div className="yurim-info">
          <div className="name">
            <strong>유림 더 숲 인테리어</strong>
          </div>
          <div className="description">
            <div>(46562) 부산 북구 만덕3로 27 (만덕동) 1층</div>
            <div>TEL : 010-9151-7941</div>
            <div>E-Mail : sharon1966@hanmail.net</div>
            <div>사업자등록번호 : 895-02-02282 | 대표자명 : 이희연</div>
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
        <div className="description">
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

        <div className="admin" onClick={() => navigation('/admin')}>
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 42px 200px;

  @media ${device.laptop} {
    padding: 42px 42px;
  }

  @media ${device.tablet} {
    padding: 12px;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media ${device.mobile} {
    padding: 0 4px;
  }

  .line {
    width: 1px;
    height: 100%;
    background-color: #555555;
    margin: 0 24px;
  }
`;

const LeftSection = styled.section`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .name {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    padding: 12px 0;

    img {
      width: 25px;
    }
  }

  .description {
    color: #a5a5a5;
    font-size: 13px;
  }

  .sns-buttons {
    display: flex;
    gap: 8px;
    padding: 12px 0;
  }
`;

const RightSection = styled.section`
  h3 {
    font-size: 16px;
    font-family: 'Pretendard-SemiBold';
  }

  .tel {
    padding: 12px 0;

    .tel-number {
      font-size: 32px;
      font-family: 'Pretendard-ExtraBold';
      color: ${(props) => props.theme.colors.green};
    }
  }

  .description {
    font-size: 13px;
    display: flex;
    gap: 48px;

    & > div > div {
      color: #a5a5a5;
    }
  }

  .admin {
    font-size: 12px;
    color: #777777;
    cursor: pointer;
  }
`;
