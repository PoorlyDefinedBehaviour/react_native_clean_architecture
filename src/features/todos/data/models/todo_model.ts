class TodoModel {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly completed: boolean
  ) {}
}

export default TodoModel
