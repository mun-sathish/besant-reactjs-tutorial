import React from 'react';
import TodoApp from './todo-app';
import { Provider } from 'react-redux';
import store from './react-tutorial/redux-tut/store'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
