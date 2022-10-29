import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    await this.deleteTaskUseCase.execute({ id })

    return response.status(200).send()
  }
}