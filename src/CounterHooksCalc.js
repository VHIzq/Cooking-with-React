import React, { useState } from 'react'
import { ThemeContext } from './App';


export default function CounterHooksCalc({initialCount}) {

  const [num, setNum] = useState(initialCount);
  return (
    <ThemeContext.Consumer>
      {
        style => (
          <div>
        <button style={style} onClick={() => setNum(num / 2)}> / 2 </button>
        <span>{num} </span>
        <button style={style}  onClick={() => setNum(num * 2)}> * 2 </button>
      </div>
        )
      }
      
    </ThemeContext.Consumer>
  );
}
