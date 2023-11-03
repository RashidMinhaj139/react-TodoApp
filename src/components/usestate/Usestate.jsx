import React, { useState } from "react";

const Usestate = () => {
  const [myname, setname] = useState("rashid"); //name will goto

  const changename = () => {
    myname === "rashid" ? setname("minhaj") : setname("rashid");
    console.log("click");
  };
  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={changename}>click</button>
    </div>
  );
};
export default Usestate;
