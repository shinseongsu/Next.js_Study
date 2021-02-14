import { readFileSync, writeFileSync } from "fs";
import { TodoTypes } from "../../types/todo";

const getList = () => {
    const todosBuffer = readFileSync("data/todos.json");
    const todosString = todosBuffer.toString();
    if(!todosString) {
        return [];
    }
    const todos: TodoTypes[] = JSON.parse(todosString);
    return todos;
};

const exist = ({ id } : { id : number}) => {
    const todos = getList();
    const todo = todos.some((todo) => todo.id === id);
    return todo;
}

// TodoList 쓰기
const write = async (todos: TodoTypes[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
}

export default { getList, exist, write };