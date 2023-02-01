import { PriorityTypes, StatusTypes } from "../defines/defines";

export interface ITASK {
    title: string;
    description: string;
    priority: PriorityTypes;
    status: StatusTypes; 
    id:string;
}