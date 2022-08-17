import React from 'react';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import ButtonBasic from './ButtonBasic';

function ButtonLogOut() {
  const logoutHandler = () => {
    persistStore.remove(authTokenKey);
    window.location.reload();
  };

  return <ButtonBasic title="로그아웃" onClick={logoutHandler} />;
}

export default ButtonLogOut;
