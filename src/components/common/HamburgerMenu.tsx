import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ImMenu3 } from 'react-icons/im';
import styled from 'styled-components';
import { NAV_MENU } from '../../constants/menu';
import { useNavigate } from 'react-router-dom';
import { menuNavigation } from '../../utils/menu';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { menuState } from '../../store/common';
import { theme } from '../../styles/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useRecoilState(menuState);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenu = (menu: string) => {
    setCurrentMenu(menu);
    navigation(menuNavigation(menu));
  };

  return (
    <HamburgerMenuContainer>
      <Button onClick={toggleDrawer(true)}>
        <div className="hamburger-icon">
          <ImMenu3 />
        </div>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <img src={logo} alt="logo" style={{ width: '100%', padding: '24px 12px' }} />
          <List>
            {NAV_MENU.map((menu) => (
              <ListItem key={menu} disablePadding>
                <ListItemButton onClick={() => handleMenu(menu)}>
                  <ListItemText
                    primary={menu}
                    primaryTypographyProps={{
                      fontSize: '16px',
                      fontFamily: 'Pretendard-SemiBold',
                      textAlign: 'left',
                      color: currentMenu === menu ? theme.colors.green : theme.colors.black,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </HamburgerMenuContainer>
  );
};

const HamburgerMenuContainer = styled.div`
  .hamburger-icon {
    font-size: 42px;
    color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }

  .MuiButtonBase-root {
    &:hover {
      background-color: inherit;
    }
  }
`;
