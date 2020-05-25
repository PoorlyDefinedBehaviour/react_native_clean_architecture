import { UpdateTodo } from "../repositories/todo_repository.ts"
import * as R from "ramda"
import { Either } from "fp-ts/lib/Either"
import Failure from "../../../../core/errors/failure"
import Todo from "../entities/todo_entity"

interface Dependencies {
  todos: {
    updateTodo: UpdateTodo
  }
}

export type MarkTodoACompleted = (id: number) => Promise<Either<Failure, Todo>>
export default ({ todos }: Dependencies) =>
  R.flip(todos.updateTodo)({ completed: true })
