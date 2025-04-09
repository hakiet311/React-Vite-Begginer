const ToDoList = (props) => {
  const { toDoList, deleteToDo } = props;

  const handleDelete = (id) => {
    deleteToDo(id);
  };
  return (
    <section className="p-3  m-auto bg-slate-700 text-sky-200 rounded-lg shadow-md shadow-slate-500/10">
      <ul className="space-y-2 *:border-b-[1px] *:py-2">
        {toDoList.map((toDo, index) => {
          return (
            <div
              className="flex flex-row justify-between items-center"
              key={toDo.id}
            >
              <li>{toDo.do}</li>
              <button
                className="px-6 py-2 rounded-lg bg-sky-600 text-white cursor-pointer transition-all duration-500 hover:-translate-y-1"
                onClick={(e) => {
                  handleDelete(toDo.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;
