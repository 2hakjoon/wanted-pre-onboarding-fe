import React from 'react';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import ButtonBasic from './ButtonBasic';

function ButtonLogOut() {
  const logoutHandler = () => {
    if (!window.confirm('로그아웃 하시겠습니까?')) return;

    persistStore.remove(authTokenKey);
    window.location.reload();
  };

  return <ButtonBasic title="로그아웃" onClick={logoutHandler} />;
}

export default ButtonLogOut;
