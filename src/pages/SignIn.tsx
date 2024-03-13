import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignInForm } from '../types/auth';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../api/auth';
import { useSetRecoilState } from 'recoil';
import { signedInState } from '../store/common';

export const SignIn = () => {
  const setSignedInState = useSetRecoilState(signedInState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      alert('로그인 되었습니다.');
      sessionStorage.setItem('access_token', data?.session?.access_token || '');
      setSignedInState(true);
    },
  });

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    signInMutation.mutate(data);
  };

  return (
    <PageLayout>
      <SignInContainer>
        <h2>관리자 페이지</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-basic"
            label="이메일"
            variant="standard"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <ErrorMessage>이메일를 입력하세요</ErrorMessage>}

          <TextField
            id="standard-password-input"
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            variant="standard"
            {...register('password', { required: true })}
          />
          {errors.password && <ErrorMessage>비밀번호를 입력하세요</ErrorMessage>}

          <Button type="submit" className="login" variant="contained">
            로그인
          </Button>
        </form>
      </SignInContainer>
    </PageLayout>
  );
};

const SignInContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 24px auto;
    gap: 24px;
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
    margin-top: 12px;

    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  text-align: right;
  margin-top: -18px;
`;
