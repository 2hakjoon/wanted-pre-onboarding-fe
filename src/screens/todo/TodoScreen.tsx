import React from 'react';
import styled from 'styled-components';
import TodoListTemplate from './template/TodoListTemplate';
import ButtonLogOut from '../../common/components/button/ButtonLogOut';
import TodoWriteTemplate from './template/TodoWriteTemplate';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import LoadingAndError from '../../common/components/error-loading/LoadingAndError';
import TodoListLoading from './template/TodoListLoading';
import TodoListError from './template/TodoListError';

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  > :first-child {
    align-self: flex-end;
    margin-bottom: 20px;
  }
`;

function TodoScreen() {
  return (
    <Container>
      <TitleHelmet title="To Do List" />
      <ButtonLogOut />
      <TodoWriteTemplate />
      <LoadingAndError loadingFallback={<TodoListLoading />} errorFallback={<TodoListError />}>
        <TodoListTemplate />
      </LoadingAndError>
    </Container>
  );
}

export default TodoScreen;
