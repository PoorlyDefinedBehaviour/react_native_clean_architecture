import { Either } from "fp-ts/lib/Either"
import TodoModel from "../models/todo_model"
import IFailure from "../../../../core/errors/failure"

interface ITodoLocalDataSource {
  getTodos: () => Promise<Either<IFailure, TodoModel[]>>
  create: (description: string) => Promise<Either<IFailure, TodoModel>>
  cacheTodos: (todos: TodoModel[]) => Promise<void>
  update: (todo: TodoModel) => Promise<Either<IFailure, TodoModel>>
  delete: (todo: TodoModel) => Promise<Either<IFailure, void>>
}

export default ITodoLocalDataSource
