import React from 'react';
import styled from 'styled-components';
import TodoListCard from '../component/TodoListCard';
import useGetTodos from '../hooks/useGetTodos';

export const TodoListContainer = styled.section`
  width: 100%;
  height: 80vh;
  border: 2px solid darkgray;
  border-radius: 30px;
  margin-right: 50px;
  padding: 20px 10px 20px 20px;
  margin: 20px 0;
`;

const ListContainer = styled.ul`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: gray; /*스크롤바의 색상*/
  }
  
  &::-webkit-scrollbar-track {
    background-color: none; /*스크롤바 트랙 색상*/
  }
`;

function TodoListTemplate() {
  const { data: todosData } = useGetTodos({ suspense: true });

  return (
    <TodoListContainer>
      {todosData?.length ? (
        <ListContainer>
          {todosData.map((todo) => (
            <TodoListCard key={todo.id} {...todo} />
          ))}
        </ListContainer>
      ) : (
        <span>할 일이 아직 없어요..</span>
      )}
    </TodoListContainer>
  );
}

export default TodoListTemplate;
