import { ChangeEvent, useState } from 'react';

function useInput(initialValue: string) {
  const [state, setState] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const clear = () => {
    setState('');
  };

  return { state, onChange, clear };
}

export default useInput;
