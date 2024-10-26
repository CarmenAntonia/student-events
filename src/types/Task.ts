import { Student } from "./Student";

export interface Task{
    description: string;
    event: Event;
    students: Student[];
    dueDate: Date;
    price: number;
}