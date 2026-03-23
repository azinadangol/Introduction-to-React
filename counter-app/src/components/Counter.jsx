import classes from './Counter.module.css';
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button className={classes.counter} onClick={incrementCount}>Increment</button>
      {/* { count > 0 ?
        {count > 0 ?<button onClick={decrementCount}>Drecement </button> :<></> }
       */ 
      }
      {count > 0 ?<button onClick={decrementCount}>Drecement </button> :<></> }
    
  
    </div>
  );

}
