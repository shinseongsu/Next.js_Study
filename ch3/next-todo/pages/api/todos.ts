import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { TodoTypes } from "../../types/todo";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") {
        try {
            const todosBuffer = fs.readFileSync("data/todos.json");
            const todoString = todosBuffer.toString();
            if(!todoString) {
                res.statusCode = 200;
                res.send([]);
            }
            const todos: TodoTypes[] = JSON.parse(todoString);
            res.statusCode = 200;
            return res.send(todos);
        } catch (e) {
            console.log(e);
            res.statusCode = 500;
            res.send(e);
        }
    }
};