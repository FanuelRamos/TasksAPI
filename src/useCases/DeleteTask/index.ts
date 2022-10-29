import { MongoRepository } from "../../repositories/implementation/MongoRepository";
import { DeleteTaskController } from "./DeleteTaskController";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

const mongoRepository = new MongoRepository();

const deleteTaskUseCase = new DeleteTaskUseCase(mongoRepository);

const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskUseCase, deleteTaskController }