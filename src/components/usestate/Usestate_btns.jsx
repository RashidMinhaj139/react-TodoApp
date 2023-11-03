import React, { useState } from "react";

 const Usestate_btns = () => {
  var value = 0;

  const [add, setadd] = useState(value);
  const [sub, setsub] = useState(add);
  const increment = () => {
    setadd(add + 1);
    console.log("increment", add);
  };
  const decrement = () => {
    // setsub( add - 1);
    setsub( setadd(add - 1));
    console.log("decrement", setadd(add - 1));
  };
  return <div>
    <h1>{add}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>;
};

export default Usestate_btns;
