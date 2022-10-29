import { Request, Response } from "express";
import { GetSingleTaskUseCase } from "./GetSingleTaskUseCase";

export class GetSingleTaskController {
  constructor(private getSingleTaskUseCase: GetSingleTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const task = await this.getSingleTaskUseCase.execute({ id })
    return response.json(task);
  }
}