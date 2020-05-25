import {
  CreateTodo,
  FindTodos,
} from "../../domain/repositories/todo_repository.ts"

interface Dependencies {
  dataSource: {
    todos: {
      createTodo: CreateTodo
      findTodos: FindTodos
    }
  }
}

export const makeCreateTodoRepository = ({ dataSource }: Dependencies) =>
  dataSource.todos.createTodo
export const makeFindTodosRepository = ({ dataSource }: Dependencies) =>
  dataSource.todos.findTodos
