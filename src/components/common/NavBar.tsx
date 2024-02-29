import styled from 'styled-components';
import { NAV_MENU } from '../../constants/menu';
import { useRecoilState } from 'recoil';
import { menuState } from '../../store/common';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logo_m from '../../assets/logo_mobile.png';
import { IoSearch } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import { device } from '../../styles/media';
import { HamburgerMenu } from './HamburgerMenu';
import { menuNavigation } from '../../utils/menu';

export const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(menuState);
  const navigation = useNavigate();

  const isLaptop = useMediaQuery({ query: device.laptop });
  const is960px = useMediaQuery({ maxWidth: 960 });

  const handleMenu = (menu: string) => {
    setCurrentMenu(menu);
    navigation(menuNavigation(menu));
  };

  return (
    <NavbarContainer>
      <div onClick={() => handleMenu('홈')} role="button" className="logo">
        <img src={isLaptop ? logo_m : logo} alt="logo" />
      </div>
      {is960px ? (
        <HamburgerMenu />
      ) : (
        <div>
          <ul>
            {NAV_MENU.map((menu, idx) => (
              <li key={idx} onClick={() => handleMenu(menu)} className={menu === currentMenu ? 'is--active' : ''}>
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="search">
        <input type="text" placeholder="새롭게 꾸며진 집을 찾아보세요" />
        <span>
          <IoSearch />
        </span>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0;
  }

  ul {
    display: flex;
    gap: 32px;

    li {
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      cursor: pointer;
    }

    @media (max-width: 1500px) {
      & li {
        font-size: 16px;
      }
    }
  }

  .is--active {
    color: ${(props) => props.theme.colors.green};
  }

  .logo {
    cursor: pointer;

    img {
      max-width: 240px;
    }
  }

  .search {
    position: relative;

    input {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.colors.gray};
    }

    span {
      position: absolute;
      top: 4px;
      right: 3px;

      svg {
        font-size: 23px;
        color: ${(props) => props.theme.colors.green};
        background-color: #fff;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.colors.darkGreen};
        }
      }
    }

    @media (max-width: 960px) {
      input {
        width: 300px;
        max-width: 200px;
      }
    }
  }
`;
