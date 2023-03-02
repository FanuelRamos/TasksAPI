import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { IUpdateTaskRequestDTO } from "./UpdateTaskDTO";

export class UpdateTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(data: IUpdateTaskRequestDTO): Promise<Task> {
    let task = new Task(data, data.id)

    const taskExists = await this.taskRepository.findById(data.id);
    if(!taskExists) {
      throw new Error(`Could not find task`)
    }

    task = await this.taskRepository.update(task);

    return task
  }
}