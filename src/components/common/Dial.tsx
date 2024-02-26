import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import styled from 'styled-components';

const actions = [
  { icon: <RiKakaoTalkFill style={{ fontSize: '30px' }} color="#FFCD00" />, name: '카카오톡' },
  { icon: <FaInstagramSquare style={{ fontSize: '26px' }} color="#E4405F" />, name: '인스타그램' },
  { icon: <SiNaver style={{ fontSize: '20px' }} color="#1EC800" />, name: '블로그' },
];

export const Dial = () => {
  return (
    <DialContainer>
      <Box sx={{ height: 320, display: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', bottom: 50, right: 100 }}
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
