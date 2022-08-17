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
  align-items: center;
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
    <Container>
      {isCompleted ? <IconCheckBoxChecked /> : <IconCheckBoxEmpty />}
      <span>{todo}</span>
      <div>
        <ButtonBasic title="삭제" type="button" onClick={() => deleteTodo(id)} />
        <ButtonBasic title="수정" type="button" onClick={() => deleteTodo(id)} />
      </div>
    </Container>
  );
}

export default TodoListCard;
