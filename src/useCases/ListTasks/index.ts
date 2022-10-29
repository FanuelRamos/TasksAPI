import { MongoRepository } from "../../repositories/implementation/MongoRepository";
import { ListTasksController } from "./ListTasksController";
import { ListTasksUseCase } from "./ListTasksUseCase";

const mongoRepository = new MongoRepository();

const listTasksUseCase = new ListTasksUseCase(mongoRepository);

const listTasksController = new ListTasksController(listTasksUseCase);

export { listTasksUseCase, listTasksController }