import { Button } from '@mui/material';
import { MdDeleteSweep } from 'react-icons/md';
import styled from 'styled-components';

interface DeleteButtonProp {
  handleDelete: (id?: number) => void;
}

export const DeleteButton = ({ handleDelete }: DeleteButtonProp) => {
  return (
    <StyledButton
      onClick={(e) => {
        handleDelete();
        e.stopPropagation();
      }}
    >
      <MdDeleteSweep />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  svg {
    font-size: 24px;
    color: ${(props) => props.theme.colors.gray};
    &:hover {
      color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;
