import styled from 'styled-components';
import { NAV_MENU } from '../../constants/menu';
import { useRecoilState } from 'recoil';
import { menuState } from '../../store/common';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(menuState);
  const navigation = useNavigate();

  const handleMenu = (menu: string) => {
    setCurrentMenu(menu);
    switch (menu) {
      case '홈':
        navigation('/');
        break;
      case '신축 인테리어':
        navigation('/new-interior');
        break;
      case '리모델링':
        navigation('/remodeling');
        break;
      case '부분디자인':
        navigation('/partial-design');
        break;
      case '현장이야기':
        navigation('/story');
        break;
      case 'CONTACT':
        navigation('/contact');
        break;

      default:
        navigation('/');
        break;
    }
  };

  return (
    <NavbarContainer>
      <div onClick={() => handleMenu('홈')} role="button" className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {NAV_MENU.map((menu, idx) => (
          <li key={idx} onClick={() => handleMenu(menu)} className={menu === currentMenu ? 'is--active' : ''}>
            {menu}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="새롭게 꾸며진 집을 찾아보세요" />
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;

  ul {
    display: flex;
    gap: 32px;

    li {
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      cursor: pointer;
    }
  }

  .is--active {
    color: ${(props) => props.theme.colors.green};
  }

  .logo {
    cursor: pointer;

    img {
      width: 240px;
    }
  }
`;
