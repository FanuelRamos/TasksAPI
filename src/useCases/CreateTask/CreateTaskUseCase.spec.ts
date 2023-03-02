import { TaskRepositoryInMemory } from "../../repositories/In-Memory/TaskRepositoryInMemory";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO"
import { CreateTaskUseCase } from "./CreateTaskUseCase"

let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory; 

describe("Create Category", () => {
    beforeAll(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    })

    it("It should be able to create a category", async () => {
        const data: ICreateTaskRequestDTO = {
            name: "Task test",
            description: "Task test description",
            start: new Date("2022/12/01"),
            finish: new Date("2022/12/31")
        };

        const task = await createTaskUseCase.execute(data);

        expect(task.id).toBeTruthy();
        expect(task.name).toBe(data.name);
        expect(task.description).toBe(data.description);
        expect(task.start).toBe(data.start);
        expect(task.finish).toBe(data.finish);

    });

    /*it("It should not be able to create a category", async () => {

    })*/
})