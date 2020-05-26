import { Either } from "fp-ts/lib/Either"
import Failure from "../../../../core/errors/failure"
import Todo from "../entities/todo_entity"

interface TodoRepository {
  create: (description: string) => Promise<Either<Failure, Todo>>
}

interface Dependencies {
  todoRepository: TodoRepository
}

const makeUseCase = ({ todoRepository }: Dependencies) => todoRepository.create

export default makeUseCase
