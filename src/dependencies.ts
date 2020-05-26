import { markTodoAsCompleted, getTodos } from "./features/todos/domain/usecases"


const dependencies = {
  markTodoAsCompleted: markTodoAsCompleted({updateTodo})
  getTodos,
}

export default dependencies
