import { Request, Response } from "express";
import { ListTasksUseCase } from "./ListTasksUseCase";

export class ListTasksController {
  constructor(private listTasksUseCase: ListTasksUseCase) {}

  async handle(request: Request , response: Response): Promise<Response> {
    const all = await this.listTasksUseCase.execute();
    
    return response.json(all);
  }
}