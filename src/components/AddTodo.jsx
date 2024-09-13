import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
function AddTodo({ addToDoValue }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const noOfUpdates = useRef(0);

  const handleAddClick = () => {
    if (todoName && todoDate) {
      addToDoValue(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    }
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
              noOfUpdates.current += 1;
            }} //onChange event is used to capture the input value
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => {
              setTodoDate(e.target.value);
              console.log("No of updates: ", noOfUpdates.current); //log the number of updates
            }}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
