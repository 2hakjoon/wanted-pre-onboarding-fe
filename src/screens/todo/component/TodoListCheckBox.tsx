import React from 'react';
import useUpdateTodos from '../hooks/useUpdateTodo';
import { Todo } from '../../../api/Todos/types';
import InputCheckbox from '../../../common/components/input/InputCheckbox';

interface TodoListCheckBoxProps {
  todo: Todo;
}

function TodoListCheckBox({ todo: { id, todo, isCompleted } }: TodoListCheckBoxProps) {
  const { mutate } = useUpdateTodos();

  const handleUpdateTodo = () => {
    mutate({ id, params: { todo, isCompleted: !isCompleted } });
  };
  return <InputCheckbox isChecked={isCompleted} onClick={handleUpdateTodo} />;
}

export default TodoListCheckBox;
