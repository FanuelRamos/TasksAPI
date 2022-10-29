import { MongoRepository } from "../../repositories/implementation/MongoRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const mongoRepository = new MongoRepository();

const createTaskUseCase = new CreateTaskUseCase(mongoRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskUseCase, createTaskController }