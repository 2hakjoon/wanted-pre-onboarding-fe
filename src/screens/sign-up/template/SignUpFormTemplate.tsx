import styled from 'styled-components';
import React from 'react';
import { SignUpError, SignUpResponse } from '../../../api/Auth/types';
import useSignUp from '../hooks/useSignUp';
import InputLabel from '../../../common/components/input/InputLabel';
import { persistStore } from '../../../persistStore/persistStore';
import { routes } from '../../routes';
import useEmailValid from '../../../utils/hooks/useEmailValid';
import usePasswordValid from '../../../utils/hooks/usePasswordValid';
import ButtonBasic from '../../../common/components/button/ButtonBasic';

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

function SignUpFormTemplate() {
  const { mutate } = useSignUp();
  const { emailState, onEmailChange, isEmailValild } = useEmailValid('');
  const { passwordState, onPasswordChange, isPasswordValild } = usePasswordValid('');

  const showEmailError = () => !isEmailValild && emailState.length !== 0;
  const showPassWordError = () => !isPasswordValild && passwordState.length !== 0;

  const signUpRequest = () => {
    const onSuccess = ({ access_token }: SignUpResponse) => {
      window.alert('회원가입이 완료되었습니다.');
      persistStore.set('TOKEN', access_token);
      window.location.reload();
    };

    const onError = ({ response }: SignUpError) => {
      return response?.data && window.alert(response?.data.message);
    };
    mutate({ email: emailState, password: passwordState }, { onSuccess, onError });
  };

  return (
    <SignUpFormContainer>
      <span className="text-head">회원가입</span>
      <div className="input-container">
        <InputLabel value={emailState} onChange={onEmailChange} title="이메일" placeholder="이메일을 입력해주세요." />
        {showEmailError() && <span className="text-error">유효한 이메일을 입력해주세요</span>}
      </div>
      <div className="input-container">
        <InputLabel
          value={passwordState}
          onChange={onPasswordChange}
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        {showPassWordError() && <span className="text-error">비밀번호 8자리를 입력해주세요</span>}
      </div>
      <ButtonBasic
        title="회원가입"
        disabled={!isEmailValild || !isPasswordValild}
        type="button"
        onClick={signUpRequest}
      />
      <a className="link-join" href={routes.login}>
        로그인하기
      </a>
    </SignUpFormContainer>
  );
}

export default SignUpFormTemplate;
