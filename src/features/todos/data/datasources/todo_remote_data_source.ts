import { right } from "fp-ts/lib/Either"
import TodoModel from "../models/todo_model"

let id = 0
let todos: TodoModel[] = []

export const createTodo = async (description: string) => {
  const todo = {
    description,
    id: id++,
    completed: false,
    created_at: new Date(),
    updated_at: new Date(),
  }
  todos.push(todo)
  right(todo)
}
export const findTodos = () => todos
