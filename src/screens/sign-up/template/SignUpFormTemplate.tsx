import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { SignUpError, SignUpParams, SignUpResponse } from '../../../api/Auth/types';
import useSignUp from '../hooks/useSignUp';
import InputLabel from '../../../common/components/input/InputLabel';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { emailPattern, passwordPattern } from '../../../common/constants/regex';
import { persistStore } from '../../../persistStore/persistStore';
import { routes } from '../../routes';

export const SignUpFormContainer = styled.form`
  border: 2px solid gray;
  border-radius: 20px;
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  .input-container {
    width: 100%;
    .text-error {
      display: block;
      margin-top: 10px;
      color: red;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

function SignUpFormTemplate() {
  const {
    register,
    getValues,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<SignUpParams>({ mode: 'onBlur' });
  const navigate = useNavigate();

  const { mutate } = useSignUp();

  const signUpRequest = ({ email, password }: SignUpParams) => {
    const onSuccess = ({ access_token }: SignUpResponse) => {
      window.alert('회원가입이 완료되었습니다.');
      persistStore.set('TOKEN', access_token);
      navigate('/', { replace: true });
      window.location.reload();
    };

    const onError = ({ response }: SignUpError) => {
      return response?.data && window.alert(response?.data.message);
    };
    mutate({ email, password }, { onSuccess, onError });
  };

  const isNotValild = () => {
    return (
      Boolean(formErrors.email?.type) === true ||
      Boolean(formErrors.password?.type) === true ||
      !getValues('email') ||
      !getValues('password')
    );
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit(signUpRequest)}>
      <span className="text-head">회원가입</span>
      <div className="input-container">
        <InputLabel
          title="이메일"
          register={register('email', { pattern: emailPattern })}
          placeholder="이메일을 입력해주세요."
        />
        {formErrors.email && <span className="text-error">이메일 양식이 잘못되었습니다.</span>}
      </div>
      <div className="input-container">
        <InputLabel
          title="비밀번호"
          type="password"
          register={register('password', { pattern: passwordPattern })}
          placeholder="비밀번호를 입력해주세요."
        />
        {formErrors.password && <span className="text-error">비밀번호는 8자리 이상입니다.</span>}
      </div>
      <ButtonBasic title="회원가입" disabled={isNotValild()} type="submit" />
      <a className="link-join" href={routes.login}>
        회원가입하기
      </a>
    </SignUpFormContainer>
  );
}

export default SignUpFormTemplate;
