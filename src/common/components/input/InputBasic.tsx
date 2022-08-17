import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid darkgray;
  border-radius: 8px;
  padding-left: 8px;
`;

interface InputBasicProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: HTMLInputTypeAttribute | undefined;
}

function InputBasic({ placeholder, type, ...rest }: InputBasicProps) {
  return <Input type={type} className="input" placeholder={placeholder} {...rest} />;
}

InputBasic.defaultProps = {
  type: undefined,
};

export default InputBasic;
