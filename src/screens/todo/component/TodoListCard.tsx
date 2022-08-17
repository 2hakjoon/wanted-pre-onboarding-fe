import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import IconCheckBoxChecked from '../../../common/components/icons/IconCheckBoxChecked';
import IconCheckBoxEmpty from '../../../common/components/icons/IconCheckBoxEmpty';
import useDeleteTodo from '../hooks/useDeleteTodo';
import { getTodosKey } from '../hooks/useGetTodos';

const Container = styled.li`
  display: flex;
  border: 2px solid darkgray;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
  > a {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function TodoListCard({ id, todo, isCompleted }: Todo) {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteTodo();

  const deleteTodo = (willDeleteTodoId: number) => {
    mutate(willDeleteTodoId, {
      onSuccess: () => {
        queryClient.refetchQueries(getTodosKey);
      },
    });
  };

  return (
    <Container data-cy="container-todo-card">
      {isCompleted ? <IconCheckBoxChecked /> : <IconCheckBoxEmpty />}
      <span data-cy="text-todo-list-title">{todo}</span>
      <ButtonBasic title="X" type="button" data-cy="button-delete-todo" onClick={() => deleteTodo(id)} />
    </Container>
  );
}

export default TodoListCard;
