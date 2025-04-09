import ToDoAdd from "./components/toDoComponent/ToDoAdd";
import ToDoList from "./components/toDoComponent/ToDoList";
import reactLogo from "./assets/react.svg";
import Header from "./components/layout/header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
``;

const App = () => {
  const list = [];
  const [toDoList, setToDoList] = useState(list);

  const deleteToDo = (id) => {
    const newToDo = toDoList.filter((item) => item.id !== id);
    setToDoList(newToDo);
  };
  return (
    <div className="space-y-6 w-full">
      <Header></Header>
      <h1 className="font-bold uppercase text-3xl text-white text-center">
        To do list
      </h1>
      <ToDoAdd setToDoList={setToDoList} toDoList={toDoList}></ToDoAdd>
      {toDoList.length === 0 ? (
        <img
          className="w-32 animate-spin m-auto hover:shadow-lg hover:shadow-sky-600/20 transition-all duration-200 mt-24"
          src={reactLogo}
          alt="Logo"
        />
      ) : (
        <ToDoList toDoList={toDoList} deleteToDo={deleteToDo}></ToDoList>
      )}
    </div>
  );
};

export default App;
