const myLogger = store => next => action => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
    
  console.log(action); // 먼저 액션을 출력한다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달한다.

  console.log('\t', store.getState());
  return result; // 여기서 반환하는 값은 dispatch(action) 의 결과물이 된다.
};

export default myLogger;
