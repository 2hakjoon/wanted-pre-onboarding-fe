/* eslint-disable camelcase */
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { LoginError, LoginParams, LoginResponse } from '../../../api/Auth/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputLabel from '../../../common/components/input/InputLabel';
import { emailPattern, passwordPattern } from '../../../common/constants/regex';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import { routes } from '../../routes';
import useLogin from '../hooks/useLogin';

export const LoginFormContainer = styled.form`
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

function LoginFormTemplate() {
  const {
    register,
    getValues,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<LoginParams>({ mode: 'onBlur' });

  const { mutate } = useLogin();

  const loginRequest = ({ email, password }: LoginParams) => {
    const onSuccess = ({ access_token }: LoginResponse) => {
      window.alert('로그인이 완료되었습니다.');
      persistStore.set(authTokenKey, access_token);
      window.location.reload();
    };

    const onError = ({ response }: LoginError) => {
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
    <LoginFormContainer onSubmit={handleSubmit(loginRequest)}>
      <span className="text-head">로그인</span>
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
      <ButtonBasic title="로그인" type="submit" disabled={isNotValild()} />
      <a className="link-join" href={routes.join}>
        회원가입하기
      </a>
    </LoginFormContainer>
  );
}

export default LoginFormTemplate;
