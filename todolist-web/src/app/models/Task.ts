import { Developer } from './developer';

export class Task {
    id: number;
    title: string;
    description: string;
    workedTime: number;
    estimateTime: number;
    developer: Developer;
}
