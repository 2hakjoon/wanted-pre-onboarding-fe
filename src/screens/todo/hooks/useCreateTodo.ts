import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { getTodosKey } from './useGetTodos';

function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation(apiTodos.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(getTodosKey);
    },
  });
}

export default useCreateTodo;
