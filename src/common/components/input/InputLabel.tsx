import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 30px;
    border: 2px solid darkgray;
    border-radius: 8px;
    padding-left: 8px;
  }
`;

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
}

function InputLabel({ title, placeholder, type, ...rest }: InputLabelProps) {
  return (
    <Container>
      <span>{title}</span>
      <input type={type} {...rest} className="input" placeholder={placeholder} />
    </Container>
  );
}


export default InputLabel;
