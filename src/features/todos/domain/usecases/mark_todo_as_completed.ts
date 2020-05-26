import { Either } from "fp-ts/lib/Either"
import Failure from "../../../../core/errors/failure"
import Todo from "../entities/todo_entity"

interface TodoRepository {
  update: (id: number, payload: Partial<Todo>) => Promise<Either<Failure, Todo>>
}

interface Dependencies {
  todoRepository: TodoRepository
}

const makeUseCase = ({ todoRepository }: Dependencies) => (todo: Todo) =>
  todoRepository.update(todo.id, { ...todo, completed: true })

export default makeUseCase
