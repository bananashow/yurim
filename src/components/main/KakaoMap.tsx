import { useEffect, useRef } from 'react';
import { BiSolidCopyAlt } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { styled } from 'styled-components';
import { handleCopyAddress } from '../../utils/addressCopy';
const { kakao } = window;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const KakaoMap = ({ geoCode }: { geoCode: string[] }) => {
  const addressRef = useRef<HTMLDivElement>(null);

  const handleAddressCopy = () => {
    const addressElement = addressRef.current;
    if (addressElement) {
      const addressText = addressElement.innerText;
      handleCopyAddress(addressText);
    }
  };

  const handleSearch = () => {
    const url =
      'https://map.kakao.com/?map_type=TYPE_MAP&itemId=1106301674&q=%EC%9C%A0%EB%A6%BC%EB%8D%94%EC%88%B2%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4&currentBound=true&urlLevel=3&urlX=961385&urlY=481256';
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  useEffect(() => {
    if (geoCode && geoCode.length === 2) {
      const [latitude, longitude] = geoCode;

      // 초기화
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커 생성
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      // 마커에 라벨 추가
      const label = new kakao.maps.InfoWindow({
        content: '<div class="label">유림더숲 인테리어</div>',
      });
      label.open(map, marker);

      // 마커가 가운데로 가도록
      map.setCenter(markerPosition);
    }
  }, [geoCode]);

  return (
    <KakaoMapWrap>
      <h2>찾아오시는 길</h2>
      <div id="map"></div>
      <div className="address" ref={addressRef}>
        (46562) 부산 북구 만덕3로 27 (만덕동) 1층 유림더숲인테리어
      </div>
      <Buttons>
        <div onClick={handleAddressCopy}>
          <span className="icon-address-copy">
            <BiSolidCopyAlt />
          </span>
          주소 복사
        </div>
        <div onClick={handleSearch}>
          <span className="icon-search">
            <FaMapMarkerAlt />
          </span>
          카카오 길찾기
        </div>
      </Buttons>
    </KakaoMapWrap>
  );
};

const KakaoMapWrap = styled.div`
  #map {
    width: 100%;
    height: 400px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .address {
    padding: 26px 0;
    font-size: 18px;
    text-align: center;
    font-family: Pretendard-semiBold;
  }

  .label {
    padding: 6px 14px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    font-size: 14px;
    font-family: Pretendard-Bold;
    padding: 12px;
    margin: 0 4px;
    width: 200px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      background-color: ${(props) => props.theme.colors.green}30;
      transition: all 0.4s;

      &:hover {
        background-color: ${(props) => props.theme.colors.green}50;
      }
    }

    &:last-child {
      background-color: #ffe402;
      transition: all 0.4s;

      &:hover {
        background-color: #ffcc00;
      }
    }
  }

  .icon-address-copy,
  .icon-search {
    font-size: 18px;
    margin-right: 6px;
  }

  .icon-address-copy {
    color: #359176;
  }

  .icon-search {
    color: #0181d1;
  }
`;
