import styled from 'styled-components';
import React from 'react';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import useUpdateTodos from '../hooks/useUpdateTodo';
import { Todo } from '../../../api/Todos/types';
import useInput from '../../../utils/hooks/useInput';

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
  const { mutate } = useUpdateTodos();
  const { state, onChange } = useInput(todo);

  const handleUpdateTodo = () => {
    const onSuccess = () => {
      closeEditMode();
    };
    mutate({ id, params: { todo: state, isCompleted } }, { onSuccess });
  };

  return (
    <FormWrapper>
      <InputBasic value={state} onChange={onChange} placeholder="" />
      <div className="button-container">
        <ButtonBasic title="취소" type="button" onClick={closeEditMode} />
        <ButtonBasic title="저장" type="button" onClick={handleUpdateTodo} />
      </div>
    </FormWrapper>
  );
}

export default TodoEditForm;
