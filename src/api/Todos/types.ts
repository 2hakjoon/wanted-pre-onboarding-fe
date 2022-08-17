export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoCreateParams {
  todo: string;
}

export interface TodoEditParams extends TodoCreateParams {
  isCompleted: boolean;
}

export type ApiGetTodosResponse = Todo[];
export type ApiGetTodoResponse = Todo[];

export interface ApiUpdateTodoArgs {
  id: number;
  params: TodoEditParams;
}
