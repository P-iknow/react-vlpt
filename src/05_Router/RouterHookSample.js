import useReactRouter from 'use-react-router';

function RouterHooksSample() {
  const { history, location, match } = useReactRouter();
  console.log({ history, location, match });
  return null;
}

export default RouterHooksSample;