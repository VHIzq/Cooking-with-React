
import { createContext, useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'
import CounterHooksCalc from './CounterHooksCalc'

export  const ThemeContext = createContext();

export default function App() {
  
  const [theme,  setTheme] = useState("green");
  return (
    <>
      <ThemeContext.Provider value={{backgroundColor: theme}}>
        Counter
        <Counter initialCount= {0} />
        Counter Hooks
        <CounterHooks initialCount= {0} />
        Counter Hooks Times / Division
        <CounterHooksCalc initialCount= {10} />
        <button onClick={ () => setTheme(prevTheme => {
          return prevTheme === "red" ? "blue" : "red"
        })}>Toggle Theme</button>
      </ThemeContext.Provider>
    </>
  )
}
