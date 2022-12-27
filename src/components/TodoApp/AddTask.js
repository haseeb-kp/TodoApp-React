import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    if(value.length!==0){
      addTask(value);
      setValue("");
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Add a Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="add-btn">
          +
        </button>
      </div>
    </>
  );
};

export default AddTask;
