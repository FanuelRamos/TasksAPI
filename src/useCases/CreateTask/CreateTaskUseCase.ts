import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute(data: ICreateTaskRequestDTO): Promise<Task> {
    const task = new Task(data);

    // Should validate if the start date is not a past date
    // Should validate if finish date is not less then start date

    await this.taskRepository.create(task);

    return task
  }
}