import { Either } from "fp-ts/lib/Either"
import IFailure from "../../../../core/errors/failure"
import Todo from "../entities/todo_entity"

interface ITodoRepository {
  create: (description: string) => Promise<Either<IFailure, Todo>>
}

export default ITodoRepository
