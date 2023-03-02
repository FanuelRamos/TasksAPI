import { TaskRepositoryInMemory } from "../../repositories/In-Memory/TaskRepositoryInMemory";
import { CreateTaskUseCase } from "../CreateTask/CreateTaskUseCase";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";



let taskRepositoryInMemory: TaskRepositoryInMemory;
let deleteTaskUseCase: DeleteTaskUseCase;
let createTaskUseCase: CreateTaskUseCase;

describe("Delete Task", () => {

    beforeAll(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        deleteTaskUseCase = new DeleteTaskUseCase(taskRepositoryInMemory);
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    });

    it("Should be able to Delete a task", async () => {
        const input = {
            name: "Task test",
            description: "Task test description",
            start: new Date("2022/12/01"),
            finish: new Date("2022/12/31")
        };

        const task = await createTaskUseCase.execute(input);
        await deleteTaskUseCase.execute({ id: task.id});
        const output = await taskRepositoryInMemory.findById(task.id);

        expect(output).toBeUndefined();
        
    })

})