import { ChangeEvent, useEffect, useState } from 'react';
import { passwordPattern } from '../common/constants/regex';

function usePasswordValid(initialValue: string) {
  const [passwordState, setPasswordState] = useState(initialValue);
  const [isPasswordValild, setIsPasswordValild] = useState(false);

  useEffect(() => {
    if (passwordState.match(passwordPattern)) {
      setIsPasswordValild(true);
    } else {
      setIsPasswordValild(false);
    }
  }, [passwordState]);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordState(e.target.value);
  };
  return { passwordState, isPasswordValild, onPasswordChange };
}

export default usePasswordValid;
