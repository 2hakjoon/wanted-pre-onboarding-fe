export interface Todo {
  id: number,
  todo: string,
  isCompleted: boolean,
  userId: number
}

export interface TodoParams {
  title: string;
  content: string;
}

export type ApiGetTodosResponse = Todo[];

export type ApiGetTodoById = Todo;

export interface ApiUpdateTodoArgs {
  id: string;
  params: TodoParams;
}
