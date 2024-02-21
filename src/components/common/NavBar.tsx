import styled from 'styled-components';
import { NAV_MENU } from '../../constants/menu';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>🏠</div>
      <ul>
        {NAV_MENU.map((menu, idx) => (
          <li key={idx}>{menu}</li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  gap: 24px;

  ul {
    display: flex;
    gap: 24px;

    li {
      font-size: 18px;
      font-family: Pretendard-SemiBold;
    }
  }
`;
