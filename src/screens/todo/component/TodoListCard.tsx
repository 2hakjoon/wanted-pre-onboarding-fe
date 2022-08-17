import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import IconCheckBoxChecked from '../../../common/components/icons/IconCheckBoxChecked';
import IconCheckBoxEmpty from '../../../common/components/icons/IconCheckBoxEmpty';
import useDeleteTodo from '../hooks/useDeleteTodo';
import { getTodosKey } from '../hooks/useGetTodos';
import TodoEditForm from './TodoEditForm';

const Container = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 2px solid darkgray;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
  .todo-contents {
    width: 100%;
    display: flex;
    align-items: center;
    .todo-text {
      padding-left: 10px;
      text-overflow: ellipsis;
    }
    .button-container {
      margin-left: auto;
      * {
        margin-left: 10px;
      }
    }
  }
`;

function TodoListCard({ id, todo, isCompleted }: Todo) {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteTodo();

  const [isEditMode, setIsEditMode] = useState(false);

  const openEditMode = () => setIsEditMode(true);

  const closeEditMode = () => setIsEditMode(false);

  const deleteTodo = () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.refetchQueries(getTodosKey);
      },
    });
  };

  return (
    <Container>
      <div className="todo-contents">
        {isCompleted ? <IconCheckBoxChecked /> : <IconCheckBoxEmpty />}
        <span className="todo-text">{todo}</span>
        {!isEditMode && (
          <div className="button-container">
            <ButtonBasic title="수정" type="button" onClick={openEditMode} />
            <ButtonBasic title="삭제" type="button" onClick={deleteTodo} />
          </div>
        )}
      </div>
      {isEditMode && <TodoEditForm closeEditMode={closeEditMode} />}
    </Container>
  );
}

export default TodoListCard;
