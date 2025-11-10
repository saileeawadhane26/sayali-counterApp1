import React, {useState} from "react";

const CounterFunction = ( ) => { 
  const [count, setCount] = useState(0);

 const increment = () => setCount(count + 1);

 const reset = () => setCount(0);
  

 const decrement = () => {
    if (count > 0) setCount (count - 1);
 };
  

   return (
      <div className="Card3">
        <h2>Functional Component </h2>
        <h3 >{count}</h3>

        <div>
         <button  className="btn1" onClick={increment}>+</button>
         <button  className="btn2" onClick={reset}>Reset</button>
         <button  className="btn3" onClick={decrement}>-</button>
        </div>
      </div>
   );
};

export default CounterFunction;