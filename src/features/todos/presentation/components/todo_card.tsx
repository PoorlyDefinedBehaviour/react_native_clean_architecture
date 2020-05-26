import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  description: {
    fontSize: 18,
  },
  completed: {
    color: "green",
  },
  pending: {
    color: "#111",
  },
})
interface Props {
  completeTodo: () => void
  description: string
  completed: boolean
}
const TodoCard: React.FC<Props> = ({
  description,
  completed,
  completeTodo,
}) => (
  <View style={style.container}>
    <Text style={completed ? style.completed : style.pending}>
      {description}
    </Text>
    <Button title={"X"} onPress={completeTodo}></Button>
  </View>
)
export default TodoCard
