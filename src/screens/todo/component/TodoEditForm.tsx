import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import useUpdateTodos from '../hooks/useUpdateTodo';
import { Todo, TodoEditParams } from '../../../api/Todos/types';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 10px;
  }
  .button-container {
    align-self: center;
    margin-top: 10px;
    button {
      margin: 0px 10px;
    }
  }
`;

interface TodoEditForm {
  todo: Todo;
  closeEditMode: () => void;
}

function TodoEditForm({ todo: { id, isCompleted, todo }, closeEditMode }: TodoEditForm) {

  const { register, handleSubmit } = useForm<TodoEditParams>({ defaultValues: { todo } });
  const { mutate } = useUpdateTodos();

  const handleUpdateTodo = ({ todo }: TodoEditParams) => {
    const onSuccess = () => {
      closeEditMode();
    };
    mutate({ id, params: { todo, isCompleted } }, { onSuccess });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleUpdateTodo)}>
      <InputBasic register={register('todo')} placeholder="" />
      <div className="button-container">
        <ButtonBasic title="취소" type="button" onClick={closeEditMode} />
        <ButtonBasic title="저장" type="submit" />
      </div>
    </FormWrapper>
  );
}

export default TodoEditForm;
