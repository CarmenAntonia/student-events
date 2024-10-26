import { Student } from "./Student";

export interface Events {
    title: string;
    description: string;
    organizer: Student;
    date: string;
    budget: number;
}