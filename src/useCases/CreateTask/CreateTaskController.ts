import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, start, finish } = request.body;

    try {
      await this.createTaskUseCase.execute({
        name,
        description,
        start,
        finish,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}