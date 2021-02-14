import axios from ".";
import { TodoTypes } from "../../types/todo";

export const getTodosAPI = () => axios.get<TodoTypes[]>("api/todos");
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);