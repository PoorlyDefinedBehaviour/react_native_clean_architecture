import Todo from "../../domain/entities/todo_entity"

type TodoModel = {
  id: number
  description: string
  completed: boolean
  created_at: Date
  updated_at: Date
}

export const toEntity = (todo: TodoModel): Todo => todo

export default TodoModel
