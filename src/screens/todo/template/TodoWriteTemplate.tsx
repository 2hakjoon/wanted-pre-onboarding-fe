import React from 'react';
import useCreateTodo from '../hooks/useCreateTodo';
import TodoWriteForm from '../component/TodoWriteForm';
import { TodoCreateParams } from '../../../api/Todos/types';

function TodoWriteTemplate() {
  const { mutate } = useCreateTodo();

  const saveTodoHandler = ({ todo }: TodoCreateParams, onSuccess: () => void) => {
    const onSuccessHandler = () => {
      onSuccess();
    };

    mutate({ todo }, { onSuccess: onSuccessHandler });
  };

  return <TodoWriteForm onSubmit={saveTodoHandler} />;
}

export default TodoWriteTemplate;
