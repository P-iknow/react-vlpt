import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
  // useSelector 에서 꼭 객체를 반환할 필요 없다.
  // 한 종류의 값만 조회하고 싶으면 원하는 값을 바로 반환하면 된다.
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  // 최적화를 위해 useCallback을 사용함
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
