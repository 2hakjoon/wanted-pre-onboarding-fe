import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import useGetTodos from '../hooks/useGetTodos';
import useUpdateTodos from '../hooks/useUpdateTodo';
import { TodoEditParams } from '../../../api/Todos/types';

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
  closeEditMode: () => void;
}

function TodoEditForm({ closeEditMode }: TodoEditForm) {
  const { id: todoId } = useParams();
  const { register, handleSubmit } = useForm<TodoEditParams>();
  const { refetch: refetchTodos } = useGetTodos({ suspense: true });
  const { mutate } = useUpdateTodos();

  const handleUpdateTodo = ({ todo, isCompleted }: TodoEditParams) => {
    if (!todoId) {
      return;
    }
    const onSuccess = () => {
      closeEditMode();
      refetchTodos();
    };
    mutate({ id: todoId, params: { todo, isCompleted } }, { onSuccess });
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
