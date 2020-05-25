import React from "react"
import { View, Text } from "react-native"

interface Props {
  description: string
  completed: boolean
}
const TodoCard: React.FC<Props> = ({ description, completed }) => (
  <View>
    <Text>{description}</Text>
  </View>
)
export default TodoCard
