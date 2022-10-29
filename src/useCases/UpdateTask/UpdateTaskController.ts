import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, start, finish } = request.body;
    const { id } = request.params
    
    try {
      const task = await this.updateTaskUseCase.execute({
        id,
        name,
        description,
        start,
        finish
      })
      return response.status(200).json(task)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}