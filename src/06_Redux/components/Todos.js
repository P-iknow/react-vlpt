import React, { useState } from 'react';

// 컴포넌트 최적화를 위해 React.memo 를 사용한다
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}>
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리하지 않는다.
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText(''); // reset input
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
        <TodoList todos={todos} onToggle={onToggle} />
      </form>
    </div>
  );
};

export default Todos;
