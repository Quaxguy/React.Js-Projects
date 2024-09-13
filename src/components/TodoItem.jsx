import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoItem({todoName, todoDate, onDelete}) {

    // let todoName = "Buy Milk";
    // let todoDate = "4/10/2023";
  
    return (
      <div className="container">
        <div className="row kg-row">
            
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick = {onDelete}>
            <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
