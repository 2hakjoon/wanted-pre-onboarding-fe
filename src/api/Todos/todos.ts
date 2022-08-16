import { apiFetch, FetchResponse } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { ApiGetTodosResponse, ApiUpdateTodoArgs, Todo, TodoParams } from './types';

export const apiTodos = {
  async getTodos() {
    return apiFetch.get<ApiGetTodosResponse>(`${apiEndpont.getTodos}`);
  },
  async createTodo(params: TodoParams) {
    return apiFetch.post(`${apiEndpont.createTodo}`, params);
  },
  async deleteTodo(id: number) {
    return apiFetch.delete(`${apiEndpont.deleteTodo}/${id}`);
  },
  async updateTodo({ id, params }: ApiUpdateTodoArgs) {
    const res = await apiFetch.put<FetchResponse<Todo>>(`${apiEndpont.deleteTodo}/${id}`, params);
    return res.data;
  },
};
