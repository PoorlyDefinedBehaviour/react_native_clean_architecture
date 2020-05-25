import React, { useState, useEffect } from "react"
import { View, FlatList } from "react-native"
import Todo from "../../domain/entities/todo_entity"
import { MarkTodoACompleted, GetTodos } from "../../domain/usecases"
import TodoCard from "../components/todo_card"
import * as R from "ramda"
import { pipe } from "fp-ts/es6/pipeable"
import { fold } from "fp-ts/es6/Either"

interface Dependencies {
  markTodoAsCompleted: MarkTodoACompleted
  getTodos: GetTodos
}
const TodosListing = ({ markTodoAsCompleted, getTodos }: Dependencies) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  const completeTodo = (todo: Todo) => {
    markTodoAsCompleted(todo.id).then(
      pipe(
        fold(
          () => console.log("aaaa"),
          t =>
            setTodos(
              R.map(
                R.cond([
                  [R.compose(R.equals(todo.id), R.prop("id")), R.always(t)],
                  [R.T, R.identity],
                ])
              )
            )
        )
      )
    )
  }

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoCard
            description={item.description}
            completed={item.completed}
          ></TodoCard>
        )}
        keyExtractor={R.compose(String, R.prop("id"))}
      />
    </View>
  )
}
export default TodosListing
