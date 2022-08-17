import { ChangeEvent, useEffect, useState } from 'react';
import { emailPattern } from '../common/constants/regex';

function useEmailValid(initialValue: string) {
  const [emailState, setEmailState] = useState(initialValue);
  const [isEmailValild, setIsEmailValild] = useState(false);

  useEffect(() => {
    if (emailState.match(emailPattern)) {
      setIsEmailValild(true);
    } else {
      setIsEmailValild(false);
    }
  }, [emailState]);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value);
  };
  return { emailState, isEmailValild, onEmailChange };
}

export default useEmailValid;
