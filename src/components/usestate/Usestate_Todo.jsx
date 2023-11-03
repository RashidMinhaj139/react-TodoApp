import React from "react";

const Usestate_Todo = () => {
  let array = [
    {
      id: 1,
      name: "rashid",
      age: 10,
    },
    {
      id: 2,
      name: "amir",
      age: 20,
    },
    {
      id: 3,
      name: "khan",
      age: 30,
    },
  ];
  console.log(array);
  return (
    <div>
      <h1>
        {array.map((items) => (
          <h1>{items.name}</h1>
        ))}
        <button>add</button>
      </h1>
      <button>remove</button>
    </div>
  );
};

export default Usestate_Todo;
