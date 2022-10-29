import { ITaskRepository } from "../../repositories/ITaskRepository";
import { IDeleteTaskRequestDTO } from "./DeleteTaskDTO";

export class DeleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(data: IDeleteTaskRequestDTO): Promise<void> {
    await this.taskRepository.delete(data.id);
  }
}