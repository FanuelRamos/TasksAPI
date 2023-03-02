import { Task } from "../../models/Task";
import { ITaskRepository } from "../ITaskRepository";


export class TaskRepositoryInMemory implements ITaskRepository {

    private Tasks: Task[] = [];

    async find(): Promise<Task[]> {
        return this.Tasks;
    }

    async findById(id: string): Promise<Task> {
        const task = this.Tasks.find((task) => task.id === id);
        return task;
    }
    
    async create(task: Task): Promise<void> {
        this.Tasks.push(task);
    }

    async update(data: Task): Promise<Task> {
        const index = this.Tasks.findIndex((task) => task.id === data.id);
        this.Tasks[index] = data;

        return data;
    }

    async delete(id: string): Promise<void> {
        const index = this.Tasks.findIndex((task) => task.id === id);

        this.Tasks.splice(index, 1);
    }

}