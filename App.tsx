import React from "react"

import TodosListing from "./src/features/todos/presentation/pages/todos_listing"
import dependencies from "./src/dependencies"

export default function App() {
  return <TodosListing getTodos={dependencies.getTodos}></TodosListing>
}
