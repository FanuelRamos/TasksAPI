import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute(data: ICreateTaskRequestDTO) {
    const task = new Task(data);

    await this.taskRepository.create(task);
  }
}