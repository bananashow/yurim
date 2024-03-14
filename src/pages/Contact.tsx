import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { addInquiry } from '../api/contact';
import { ContactForm } from '../types/contact';
import { useState } from 'react';
import { phoneNumberValidation } from '../utils/validation';
import { queryClient } from '../api/queryClient';
import { QUERY_KEY } from '../constants/api';

export const Contact = () => {
  const [phone, setPhone] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = phoneNumberValidation(e);
    if (formattedPhone) {
      setPhone(formattedPhone);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const contactMutaion = useMutation({
    mutationFn: addInquiry,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.GET_INQUIRY_LIST],
      });
    },
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    if (confirm('견적을 요청할까요?')) {
      contactMutaion.mutate(data);
      setPhone('');
    } else {
      return false;
    }
  };

  return (
    <PageLayout>
      <ContactContainer>
        <h2>견적 요청</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            간단한 주소
            <input {...register('address', { required: true })} placeholder="ex) 동래구 온천동 동래래미안아이파크" />
            {errors.address && <ErrorMessage>주소를 입력하세요</ErrorMessage>}
          </label>
          <label>
            평수
            <input {...register('py', { required: true })} placeholder="평수를 입력하세요" type="number" />
            {errors.py && <ErrorMessage>평수를 입력하세요</ErrorMessage>}
          </label>
          <label>
            이름
            <input {...register('name', { required: true })} placeholder="이름을 입력하세요" type="text" />
            {errors.name && <ErrorMessage>이름을 입력하세요</ErrorMessage>}
          </label>
          <label>
            연락처
            <input
              {...register('phone', { required: true })}
              placeholder="연락처를 입력하세요"
              type="text"
              onChange={handlePhoneChange}
              value={phone}
            />
            {errors.phone && <ErrorMessage>연락처를 입력하세요</ErrorMessage>}
          </label>
          <label>
            희망 예산
            <input {...register('budget', { required: true })} placeholder="희망 예산을 입력하세요" type="text" />
            {errors.budget && <ErrorMessage>희망 예산을 입력하세요</ErrorMessage>}
          </label>
          <label>
            추가 질문 사항 (옵션)
            <textarea
              {...register('question', { required: false })}
              placeholder="추가 질문 사항을 입력하세요"
              rows={10}
            />
            {errors.question && <ErrorMessage>추가 질문 사항을 입력하세요</ErrorMessage>}
          </label>

          <button type="submit">문의하기</button>
        </StyledForm>
      </ContactContainer>
    </PageLayout>
  );
};

const ContactContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: auto;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
  }

  textarea {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    resize: none;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
