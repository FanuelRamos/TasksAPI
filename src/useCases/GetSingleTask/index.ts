import { MongoRepository } from "../../repositories/implementation/MongoRepository";
import { GetSingleTaskController } from "./GetSingleTaskController";
import { GetSingleTaskUseCase } from "./GetSingleTaskUseCase";

const mongoRepository = new MongoRepository();

const getSingleTaskUseCase = new GetSingleTaskUseCase(mongoRepository);

const getSingleTaskController = new GetSingleTaskController(getSingleTaskUseCase);

export { getSingleTaskUseCase, getSingleTaskController }