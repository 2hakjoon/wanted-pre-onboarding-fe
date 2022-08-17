import styled from 'styled-components';
import React from 'react';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoCreateParams } from '../../../api/Todos/types';
import useInput from '../../../utils/hooks/useInput';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  button {
    flex-shrink: 0;
    margin-left: 20px;
  }
`;

interface TodoWriteFormProps {
  onSubmit: (args: TodoCreateParams, onSuccess: () => void) => void;
}

function TodoWriteForm({ onSubmit }: TodoWriteFormProps) {
  const { state, onChange, clear } = useInput('');

  const saveTodoHandler = () => {
    if (state.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
    }

    onSubmit({ todo: state }, clear);
  };

  return (
    <FormWrapper>
      <InputBasic value={state} onChange={onChange} placeholder="주제." />
      <ButtonBasic title="저장" type="button" onClick={saveTodoHandler} />
    </FormWrapper>
  );
}

export default TodoWriteForm;
