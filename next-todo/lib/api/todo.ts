import axios from ".";
import {TodoType} from "../../types/todo";

export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");
export const checkTodoApi = (id:number) => axios.patch(`api/todos/${id}`);