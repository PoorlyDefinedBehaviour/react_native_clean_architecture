import { Either } from "fp-ts/lib/Either"
import Failure from "../../../../core/errors/failure"
import Todo from "../entities/todo_entity"

export type CreateTodo = (description: string) => Promise<Either<Failure, Todo>>
export type FindTodos = (userId: number) => Promise<Todo[]>
export type UpdateTodo = (
  id: number,
  update: Partial<Todo>
) => Promise<Either<Failure, Todo>>
