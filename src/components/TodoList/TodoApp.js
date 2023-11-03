import React, { useState } from "react";
import "./todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Todolist from "./Todolist";
const TodoApp = () => {
  const [inputList, setinputList] = useState();
  const [list, setList] = useState([]);
  const itemEvent = (e) => {
    setinputList(e.target.value);
  };
  const listitems = () => {
    setList([...list, inputList]);
    setinputList("");
    console.log("array===>", list);
  };
  return (
    <>
      <div className="main">
        <div className="center_main">
          <input
            type="text"
            placeholder="enter task"
            value={inputList || ""}
            onChange={itemEvent}
          />
          
          <button onClick={listitems}>Add</button>
          <FontAwesomeIcon icon="fa-solid fa-faTrash" />

          <div>
            {list.map((items ,index) => {
             return <Todolist  key={index}  text={items}  />
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
