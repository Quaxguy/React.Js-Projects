//what store in react does is it takes the state and the functions that manipulate the state and puts them in a separate file

import { createContext } from "react";

export const TodoItemsContext = createContext([]); //create a context object

