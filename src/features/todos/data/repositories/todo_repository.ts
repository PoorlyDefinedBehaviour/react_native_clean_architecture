import Todo from "../../domain/entities/todo_entity"
import { Either } from "fp-ts/lib/Either"
import Failure from "../../../../core/errors/failure"
import TodoModel from "../models/todo_model"

export interface DataSource {
  create: (todo: Omit<Todo, "id">) => Promise<Either<Failure, TodoModel>>
  find: () => Promise<Todo[]>
  update: (
    id: number,
    payload: Partial<Todo>
  ) => Promise<Either<Failure, TodoModel>>
}

interface Dependencies {
  dataSource: DataSource
}

const makeRepository = ({ dataSource }: Dependencies) => ({
  create: (description: string) =>
    dataSource.create({ description, completed: false }),
  find: dataSource.find,
  update: dataSource.update,
})

export default makeRepository
