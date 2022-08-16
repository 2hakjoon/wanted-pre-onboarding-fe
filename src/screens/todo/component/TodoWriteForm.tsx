import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoCreateParams } from '../../../api/Todos/types';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  > * {
    margin: 0 20px;
  }
  button {
    flex-shrink: 0;
  }
`;

interface TodoWriteFormProps {
  onSubmit: (args: TodoCreateParams, onSuccess: () => void) => void;
}

function TodoWriteForm({ onSubmit }: TodoWriteFormProps) {
  const { register, handleSubmit, setValue } = useForm<TodoCreateParams>();

  const saveTodoHandler = ({ todo }: TodoCreateParams) => {
    if (todo.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
      return;
    }

    onSubmit({ todo }, () => {
      setValue('todo', '');
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(saveTodoHandler)}>
      <InputBasic register={register('todo')} placeholder="주제." data-cy="input-todo-title" />
      <ButtonBasic title="저장" type="submit" data-cy="button-save-todo" />
    </FormWrapper>
  );
}

export default TodoWriteForm;
