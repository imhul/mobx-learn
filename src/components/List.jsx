import React from 'react'
import { observer } from "mobx-react-lite"
import TodoView from './View'

const TodoList = observer(({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  }

  return (
    <div className="wrapper">
      {store.report}
      <ul>
        {store.todos.map(
          (todo, idx) => <TodoView todo={todo} key={idx} />
        )}
      </ul>
      {store.pendingRequests > 0 ? <span>Loading...</span> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
})

export default TodoList;