import { NAV_MENU } from '../constants/menu';

export const menuNavigation = (menu: string) => {
  let path = '';

  switch (menu) {
    case NAV_MENU[0]:
      path = '/';
      break;
    case NAV_MENU[1]:
      path = '/home';
      break;
    case NAV_MENU[2]:
      path = '/store';
      break;
    case NAV_MENU[3]:
      path = '/partial-design';
      break;
    case NAV_MENU[4]:
      path = '/story';
      break;
    case NAV_MENU[5]:
      path = '/contact';
      break;

    default:
      path = '/';
      break;
  }

  return path;
};
