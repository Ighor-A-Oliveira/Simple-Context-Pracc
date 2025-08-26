import { createContext, useContext, useState } from "react";

//create the context and can create a structure for it
const CounterContext = createContext();

// here we manipulate the data
export function CounterProvider({ children }) {
    //state we want the app to have access
  const [count, setCount] = useState(0);

  //functions that modify the state
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useCounter(){
    return useContext(CounterContext)
}
