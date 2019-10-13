import React from 'react';
import CounterContainers from './containers/CounterContainers';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainers />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
