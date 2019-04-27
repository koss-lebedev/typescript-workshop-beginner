type TodoItem = {
  title: string
  isDone: boolean
}

const addTodo = (item: TodoItem) => ({
  type: 'ADD_TODO',
  payload: {
    item,
  },
})

export const reducer = (state: ReadonlyArray<TodoItem>, action) => {
  // reducer logic here...
}
