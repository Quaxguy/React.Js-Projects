import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  // const todoItems = [
  //   { todoName: "Buy Milk", todoDate: "4/10/2023" },
  //   { todoName: "Buy Eggs", todoDate: "4/10/2023" },
  //   { todoName: "Buy Bread", todoDate: "4/10/2023" },
  //   { todoName: "Buy Butter", todoDate: "4/10/2023" },
  // ];

  const [todoItems, setTodoItems] = useState([]); // State to store the todo items

  const handleOnClick = (todoName, todoDate) => {
    // const newTodo = { todoName, todoDate };
    // setTodoItems([...todoItems, newTodo]); // Add the new todo item to the existing array of todo items
    setTodoItems((currValue) => [ //currValue is the current value of the state
      ...currValue,
      { todoName, todoDate },
    ])
  };

  const handleOnDelete = (index)=>{
    const newTodoItems = todoItems.filter((item,i)=>i!==index); //creates a new array of todo items excluding the item to be deleted
    setTodoItems(newTodoItems); //set the state with the new array of todo items
  }


  return (
    <TodoItemsContext.Provider value = {todoItems}> 
    <center className="todo-container">
      <AppName />
      <WelcomeMessage></WelcomeMessage>
      <AddTodo addToDoValue={handleOnClick} />
      <TodoItems  onDelete = {handleOnDelete}></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
