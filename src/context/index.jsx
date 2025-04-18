import React, { createContext, useReducer } from "react";
import { counterReducer, initialState } from "../reducers";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
