import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import useDeleteTodo from '../hooks/useDeleteTodo';
import { getTodosKey } from '../hooks/useGetTodos';
import TodoEditForm from './TodoEditForm';
import TodoListCheckBox from './TodoListCheckBox';

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
      width: 100%;
      padding-left: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .button-container {
      margin-left: auto;
      flex-shrink: 0;
      * {
        margin-left: 10px;
      }
    }
  }
`;

function TodoListCard({ id, todo, isCompleted, userId }: Todo) {
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
        <TodoListCheckBox todo={{ id, todo, isCompleted, userId }} />
        <span className="todo-text">{todo}</span>
        {!isEditMode && (
          <div className="button-container">
            <ButtonBasic title="수정" type="button" onClick={openEditMode} />
            <ButtonBasic title="삭제" type="button" onClick={deleteTodo} />
          </div>
        )}
      </div>
      {isEditMode && <TodoEditForm todo={{ id, todo, isCompleted, userId }} closeEditMode={closeEditMode} />}
    </Container>
  );
}

export default TodoListCard;
