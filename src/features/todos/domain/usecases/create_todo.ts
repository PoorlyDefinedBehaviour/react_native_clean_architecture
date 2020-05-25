import { CreateTodo } from "../repositories/todo_repository.ts"

interface Dependencies {
  todos: {
    createTodo: CreateTodo
  }
}

export default ({ todos }: Dependencies) => todos.createTodo
