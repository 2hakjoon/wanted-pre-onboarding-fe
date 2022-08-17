import React from 'react';
import styled from 'styled-components';
import IconCheckBoxChecked from '../icons/IconCheckBoxChecked';
import IconCheckBoxEmpty from '../icons/IconCheckBoxEmpty';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

interface InputCheckBoxProps {
  isChecked: boolean;
  onClick: () => void;
}

function InputCheckbox({ isChecked, ...rest }: InputCheckBoxProps) {
  return (
    <Button type="button" {...rest}>
      {isChecked ? <IconCheckBoxChecked /> : <IconCheckBoxEmpty />}
    </Button>
  );
}

export default InputCheckbox;
