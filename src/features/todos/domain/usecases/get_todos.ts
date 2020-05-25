import { FindTodos } from "../repositories/todo_repository.ts"
import Todo from "../entities/todo_entity"

interface Dependencies {
  todos: {
    findTodos: FindTodos
  }
}
export type GetTodos = () => Promise<Todo[]>
export default ({ todos }: Dependencies) => todos.findTodos
