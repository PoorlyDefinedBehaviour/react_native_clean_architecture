import React, { useState, useEffect } from "react"
import { View, FlatList, Text } from "react-native"
import Todo from "../../domain/entities/todo_entity"
import { MarkTodoAsCompleted, GetTodos } from "../../domain/usecases"
import TodoCard from "../components/todo_card"
import * as R from "ramda"
import { fold } from "fp-ts/es6/Either"

interface Dependencies {
  //  markTodoAsCompleted: MarkTodoAsCompleted
  getTodos: GetTodos
}
const TodosListing = ({ getTodos }: Dependencies) => {
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then(R.compose(() => setLoading(false), setTodos))
  }, [])

  const completeTodo = ({ id }: Todo) => {
    /*   markTodoAsCompleted(id).then(
      fold(
        () => setErrorMessage("Failed to complete todo"),
        todo =>
          setTodos(
            R.map(
              R.cond([
                [R.compose(R.equals(id), R.prop("id")), R.always(todo)],
                [R.T, R.identity],
              ])
            )
          )
      )
    )*/
  }

  if (loading) {
    return <Text>loading</Text>
  }

  return (
    <View>
      {
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard
              completeTodo={() => completeTodo(item)}
              description={item.description}
              completed={item.completed}
            ></TodoCard>
          )}
          keyExtractor={R.compose(String, R.prop("id"))}
        />
      }
    </View>
  )
}
export default TodosListing
