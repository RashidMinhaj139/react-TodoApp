import React, { useState } from "react";

const Usestate_3Dot = () => {
  let obj = {
    id: 0,
    name: "rashid",
    age: 10,
  };

  const [update, setupdate] = useState(obj);

  const change = () => {
    console.log("clear");
    setupdate({ ...update, name: "khann" });
  };
  return (
    <>
      <div>
        <h1>
          Name:{update.name} , age:{update.age}
        </h1>
      </div>
      <button onClick={change}>click</button>
    </>
  );
};

export default Usestate_3Dot;
