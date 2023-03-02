import { TaskRepositoryInMemory } from "../../repositories/In-Memory/TaskRepositoryInMemory";
import { CreateTaskUseCase } from "../CreateTask/CreateTaskUseCase";
import { ListTasksUseCase } from "./ListTasksUseCase";


let listTasksUseCase: ListTasksUseCase;
let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;

describe("Get all Tasks", () => {
    beforeAll(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
        listTasksUseCase = new ListTasksUseCase(taskRepositoryInMemory);
    });

    it("Should be able to get all tasks", async () => {
        const input_1 = {
            name: "Task test",
            description: "Task test description",
            start: new Date("2022/12/01"),
            finish: new Date("2022/12/31")
        };

        const input_2 = {
            name: "Task test 2",
            description: "Task test description 2",
            start: new Date("2023/12/01"),
            finish: new Date("2023/12/31")
        };

        await createTaskUseCase.execute(input_1);
        await createTaskUseCase.execute(input_2);
        const output = await listTasksUseCase.execute();

        expect(output).toHaveLength(2);
    })
})