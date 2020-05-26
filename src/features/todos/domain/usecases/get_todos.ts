import Todo from "../entities/todo_entity"

interface TodoRepository {
  find: () => Promise<Todo[]>
}

interface Dependencies {
  todoRepository: TodoRepository
}

const makeUseCase = ({ todoRepository }: Dependencies) => todoRepository.find

export default makeUseCase
