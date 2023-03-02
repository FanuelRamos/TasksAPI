import { TaskRepositoryInMemory } from "../../repositories/In-Memory/TaskRepositoryInMemory";
import { CreateTaskUseCase } from "../CreateTask/CreateTaskUseCase";
import { IGetSingleTaskRequestDTO } from "./GetSingleTaskDTO";
import { GetSingleTaskUseCase } from "./GetSingleTaskUseCase";


let getSingleTaskUseCase: GetSingleTaskUseCase;
let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;

describe("Get Single Task", () => {
    beforeAll(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
        getSingleTaskUseCase = new GetSingleTaskUseCase(taskRepositoryInMemory);
    });

    it("Should be able to get a single task base on id given", async () => {
        const data_1 = {
            name: "Task test",
            description: "Task test description",
            start: new Date("2022/12/01"),
            finish: new Date("2022/12/31")
        };

        const input_1 = await createTaskUseCase.execute(data_1);
        const output = await getSingleTaskUseCase.execute({ id: input_1.id });

        expect(output.name).toBe(input_1.name);
        expect(output.description).toBe(input_1.description);
        expect(output.start).toBe(input_1.start);
        expect(output.finish).toBe(input_1.finish);
        
    })
})