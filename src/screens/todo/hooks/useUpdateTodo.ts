import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { getTodosKey } from './useGetTodos';

function useUpdateTodos() {
  const queryClient = useQueryClient();
  return useMutation(apiTodos.updateTodo, { onSuccess: () => queryClient.invalidateQueries(getTodosKey) });
}

export default useUpdateTodos;
