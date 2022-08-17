/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { LoginError, LoginResponse } from '../../../api/Auth/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputLabel from '../../../common/components/input/InputLabel';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import useEmailValid from '../../../utils/hooks/useEmailValid';
import usePasswordValid from '../../../utils/hooks/usePasswordValid';
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
    height: 50px;
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
  const { mutate } = useLogin();
  const { emailState, onEmailChange, isEmailValild } = useEmailValid('');
  const { passwordState, onPasswordChange, isPasswordValild } = usePasswordValid('');

  const showEmailError = () => !isEmailValild && emailState.length !== 0;
  const showPassWordError = () => !isPasswordValild && passwordState.length !== 0;

  const loginRequest = () => {
    const onSuccess = ({ access_token }: LoginResponse) => {
      window.alert('로그인이 완료되었습니다.');
      persistStore.set(authTokenKey, access_token);
      window.location.reload();
    };

    const onError = ({ response }: LoginError) => {
      return response?.data && window.alert(response?.data.message);
    };

    mutate({ email: emailState, password: passwordState }, { onSuccess, onError });
  };

  return (
    <LoginFormContainer>
      <span className="text-head">로그인</span>
      <div className="input-container">
        <InputLabel title="이메일" value={emailState} onChange={onEmailChange} placeholder="이메일을 입력해주세요." />
        {showEmailError() && <span className="text-error">유효한 이메일을 입력해주세요</span>}
      </div>
      <div className="input-container">
        <InputLabel
          title="비밀번호"
          type="password"
          value={passwordState}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {showPassWordError() && <span className="text-error">비밀번호 8자리를 입력해주세요</span>}
      </div>
      <ButtonBasic title="로그인" onClick={loginRequest} type="button" disabled={!isEmailValild || !isPasswordValild} />
      <a className="link-join" href={routes.join}>
        회원가입하기
      </a>
    </LoginFormContainer>
  );
}

export default LoginFormTemplate;
