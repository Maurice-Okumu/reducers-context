import React, { useContext, useEffect } from 'react';
import { CounterContext } from '../context';

function Tester() {
  const { state } = useContext(CounterContext);
  useEffect(() => {
    console.log('Counter value changed:', state.count);
  }, [state.count]);

  return (
    <div>
      <h2>Current Counter Value: {state.count}</h2>
    </div>
  );
}

export default Tester;