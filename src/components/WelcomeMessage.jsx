import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext); //use the context object to get the todo items
  return todoItems.length === 0 && <h1>You have zero tasks, Enjoy!</h1>;
};

export default WelcomeMessage;
