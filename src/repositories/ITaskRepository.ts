import { Task } from "../models/Task";

export interface ITaskRepository {
  find(): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  create(task: Task): Promise<void>;
  update(id: string): Promise<Task>;
  delete(id: string): Promise<void>;
}