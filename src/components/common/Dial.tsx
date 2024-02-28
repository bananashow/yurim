import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import styled from 'styled-components';
import { device } from '../../styles/media';
import { useMediaQuery } from 'react-responsive';

export const Dial = () => {
  const actions = [
    {
      icon: <RiKakaoTalkFill style={{ fontSize: '30px' }} color="#FFCD00" onClick={() => newWindow('카카오톡')} />,
      name: '카카오톡',
    },
    {
      icon: <FaInstagramSquare style={{ fontSize: '26px' }} color="#E4405F" onClick={() => newWindow('인스타그램')} />,
      name: '인스타그램',
    },
    {
      icon: <SiNaver style={{ fontSize: '20px' }} color="#1EC800" onClick={() => newWindow('블로그')} />,
      name: '블로그',
    },
  ];

  const newWindow = (target: string) => {
    let targetURL = '';

    switch (target) {
      case '카카오톡':
        targetURL = 'https://open.kakao.com/o/gbjqJ7ud';
        break;
      case '인스타그램':
        targetURL = 'https://www.instagram.com/yurimthesup';
        break;
      case '블로그':
        targetURL = 'https://blog.naver.com/yurimthesup';
        break;
    }

    window.open(targetURL);
  };

  const isLaptop = useMediaQuery({ query: device.laptop });

  return (
    <DialContainer>
      <Box sx={{ height: 320, display: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', bottom: isLaptop ? 30 : 50, right: isLaptop ? 30 : 100 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </Box>
    </DialContainer>
  );
};

const DialContainer = styled.div`
  z-index: 9999;
  position: fixed;

  .MuiFab-primary {
    background-color: ${(props) => props.theme.colors.green};
    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }

  svg {
    font-size: 24px;
  }
`;
