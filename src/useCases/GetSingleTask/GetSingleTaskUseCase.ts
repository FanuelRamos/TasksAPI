import { Task } from "../../models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { IGetSingleTaskRequestDTO } from "./GetSingleTaskDTO";

export class GetSingleTaskUseCase {
  constructor(private taskRespository: ITaskRepository) {}

  async execute(data: IGetSingleTaskRequestDTO): Promise<Task> {
    const task: Task = await this.taskRespository.findById(data.id)

    return task;
  }
}