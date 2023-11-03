import React, { useState } from "react";

const Usestate_arr = () => {
  const data = [
    {
      id: 0,
      name: "khantro",
      age: 20,
    },
    {
      id: 1,
      name: "zrmoo",
      age: 30,
    },
  ];

  const [data1, setData1] = useState(data);
  const clear = () => {
    setData1([]);
  };
  return (
    <div>
      {data1.map((items) => (
        <h1 key={items.id}>
          Name: {items.name} ,age: {items.age}
        </h1>
      ))}
      <button onClick={clear}>click</button>
    </div>
  );
};

export default Usestate_arr;
