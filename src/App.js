import React from 'react';
import CounterContainers from '../src/06_Redux/containers/CounterContainers';
import TodosContainer from '../src/06_Redux/containers/TodosContainer';

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
