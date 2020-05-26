import { right, left } from "fp-ts/lib/Either"
import TodoModel from "../models/todo_model"
import { DataSource } from "../repositories/todo_repository"
import * as R from "ramda"

let id = 0
let todos: TodoModel[] = []

const todoRemoteDataSource: DataSource = {
  create: async ({ description, completed }) => {
    const todo = {
      description,
      completed,
      id: id++,
      created_at: new Date(),
      updated_at: new Date(),
    }
    todos.push(todo)
    return right(todo)
  },
  find: async () => todos,
  update: async (id, payload) => {
    const todo = {
      ...todos.find(R.compose(R.equals(id), R.prop("id")))!,
      payload,
    }

    todos = todos.map(t => (t.id === id ? todo : t))

    return right(todo)
  },
}

export default todoRemoteDataSource
