import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { ApiGetTodosResponse, ApiUpdateTodoArgs, Todo, TodoCreateParams } from './types';

export const apiTodos = {
  async getTodos() {
    return apiFetch.get<ApiGetTodosResponse>(`${apiEndpont.getTodos}`);
  },
  async createTodo(params: TodoCreateParams) {
    return apiFetch.post(`${apiEndpont.createTodo}`, params);
  },
  async deleteTodo(id: number) {
    return apiFetch.delete(`${apiEndpont.deleteTodo}/${id}`);
  },
  async updateTodo({ id, params }: ApiUpdateTodoArgs) {
    return apiFetch.put<Todo>(`${apiEndpont.deleteTodo}/${id}`, params);
   
  },
};
