import { Box, Button, ButtonGroup } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useState } from 'react';
import { PY_CATEGORY } from '../../constants/menu';

export const PyButtonGroup = () => {
  const [currentCategory, setCategory] = useState('전체');

  return (
    <PyButtonGroupContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 5,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="Basic button group">
          {PY_CATEGORY.map((category, idx) => (
            <Button
              key={idx}
              onClick={() => setCategory(category)}
              className={category === currentCategory ? 'is--active' : ''}
              sx={{
                borderColor: `${theme.colors.green} !important`,
              }}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </PyButtonGroupContainer>
  );
};

const PyButtonGroupContainer = styled.div`
  .MuiButtonBase-root {
    color: ${(props) => props.theme.colors.gray};
    &:hover {
      color: #fff;
      background-color: ${(props) => props.theme.colors.green}80;
    }
  }

  .is--active {
    color: #fff;
    background-color: ${(props) => props.theme.colors.green}80;
  }
`;
