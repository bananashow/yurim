import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Button, TextField } from '@mui/material';

export const SignIn = () => {
  return (
    <PageLayout>
      <SignInContainer>
        <div className="form">
          <TextField id="standard-basic" label="아이디" variant="standard" />
          <TextField
            id="standard-password-input"
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <Button className="login" variant="contained">
            로그인
          </Button>
        </div>
      </SignInContainer>
    </PageLayout>
  );
};

const SignInContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 350px;
  }

  .MuiFormLabel-filled {
    color: ${(props) => props.theme.colors.green};
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.colors.green};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${(props) => props.theme.colors.green};
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${(props) => props.theme.colors.green};
  }

  .login {
    width: 100%;
    background-color: ${(props) => props.theme.colors.green};

    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;
