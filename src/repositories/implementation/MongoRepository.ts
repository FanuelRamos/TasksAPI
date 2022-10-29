import { Task } from "../../models/Task";
import { ITaskRepository } from "../ITaskRepository";
import TaskSchema from "../../models/implementation/TaskSchema";

export class MongoRepository implements ITaskRepository {
  async find(): Promise<Task[]> {
    let tasks: Task[] = [];
    tasks = await TaskSchema.find({})
    return tasks;
  }
  async findById(id: string): Promise<Task> {
    const task: Task = await TaskSchema.findById({ _id: id })

    return task;
  }
  async create(task: Task): Promise<void> {
    TaskSchema.create(task);
  }
  async update(data: Task): Promise<Task> {
    const task: Task = await TaskSchema.findOneAndReplace({ _id: data.id}, data, {
      new: true,
      runValidators: true
    })

    return task;
  }
  async delete(id: string): Promise<void> {
    await TaskSchema.findOneAndDelete({ _id: id })
  }

}