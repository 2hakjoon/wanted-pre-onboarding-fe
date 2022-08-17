import React from 'react';
import useCreateTodo from '../hooks/useCreateTodo';
import TodoWriteForm from '../component/TodoWriteForm';
import { TodoCreateParams } from '../../../api/Todos/types';

function TodoWriteTemplate() {
  const { mutate } = useCreateTodo();

  const saveTodoHandler = ({ todo }: TodoCreateParams, afterSuccess: () => void) => {
    const onSuccess = () => {
      afterSuccess();
    };

    mutate({ todo }, { onSuccess });
  };

  return <TodoWriteForm onSubmit={saveTodoHandler} />;
}

export default TodoWriteTemplate;
