import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems = ({ onDelete }) => {
  const todoItems = useContext(TodoItemsContext); //use the context object to get the todo items
  return (
    <div className="items-container">
      {todoItems.map((items,index) => (
        <TodoItem key={index}  //index is used as the key and is unique for each item assigned by map function
          todoName={items.todoName}
          todoDate={items.todoDate}
          onDelete = {()=>onDelete(index)} //passing the index of the item to be deleted to the onDelete function
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
