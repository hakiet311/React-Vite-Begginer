import { useState } from "react";

const ToDoAdd = (props) => {
  const [valueInput, setValueInput] = useState("");

  const { setToDoList, toDoList } = props;

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleValueInput = (value) => {
    const newToDo = {
      id: randomId(1, 1000),
      do: value,
    };
    return newToDo;
  };
  //
  return (
    <div className=" flex gap-3 justify-center items-center">
      <input
        className="bg-slate-100 w-[80%] lg:w-[50%] rounded-lg focus:outline-0 py-2 px-4 focus:shadow-xl focus:shadow-slate-100/20 text-slate-900 transition-all duration-300"
        type="text"
        placeholder="Enter your task"
        required
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
        value={valueInput}
      />
      <button
        className="py-2 px-8 bg-sky-600 text-white rounded-lg cursor-pointer hover:bg-sky-700 transition-all duration-300"
        onClick={() => {
          if (valueInput !== "") {
            setToDoList([...toDoList, handleValueInput(valueInput)]);
            setValueInput("");
          } else alert("Empty content");
        }}
      >
        Add
      </button>
    </div>
  );
};
export default ToDoAdd;
