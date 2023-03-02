import { v4 as uuidV4 } from 'uuid';

import { TaskRepositoryInMemory } from "../../repositories/In-Memory/TaskRepositoryInMemory";
import { CreateTaskUseCase } from "../CreateTask/CreateTaskUseCase";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";



let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;
let updateTaskUseCase: UpdateTaskUseCase;

describe("Update Task", () => {
    beforeAll(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
        updateTaskUseCase = new UpdateTaskUseCase(taskRepositoryInMemory);
    });

    it("Should be able to update a task", async () => {
        const input_1 = {
            name: "Task test",
            description: "Task test description",
            start: new Date("2022/12/01"),
            finish: new Date("2022/12/31")
        };

        const task = await createTaskUseCase.execute(input_1);

        const input_2 = {
            id: task.id,
            name: "Task test Updated",
            description: "Task test description Updated",
            start: new Date("2023/02/11"),
            finish: new Date("2023/02/13")
        };

        const output = await updateTaskUseCase.execute(input_2);

        expect(output.name).toBe(input_2.name);
        expect(output.description).toBe(input_2.description);
        expect(output.start).toBe(input_2.start);
        expect(output.finish).toBe(input_2.finish);
    });

    it("Should not be able to update a task", async () => {

        const input = {
            id: uuidV4(),
            name: "Task test",
            description: "Task test description",
            start: new Date("2023/02/11"),
            finish: new Date("2023/02/13")
        };

        await expect(() => updateTaskUseCase.execute(input)).rejects.toThrow(`Could not find task`);
    });
})