import { MongoRepository } from "../../repositories/implementation/MongoRepository";
import { UpdateTaskController } from "./UpdateTaskController";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

const mongoRepository = new MongoRepository();

const updateTaskUseCase = new UpdateTaskUseCase(mongoRepository);

const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export { updateTaskUseCase, updateTaskController }