import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { ApiGetTodosResponse } from '../../../api/Todos/types';

export const getTodosKey = ['getTodos'];

function useGetTodos(options?: UseQueryOptions<ApiGetTodosResponse>) {
  return useQuery<ApiGetTodosResponse>(getTodosKey, apiTodos.getTodos, options);
}

export default useGetTodos;
