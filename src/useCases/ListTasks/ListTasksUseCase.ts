import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";

export class ListTasksUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  execute(): Promise<Task[]> {
    const tasks = this.taskRepository.find();

    return tasks;
  }
}