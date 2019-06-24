import { Priority } from "../enums";

export interface ITask {
    title: string;
    content: string;
    priority: Priority
}