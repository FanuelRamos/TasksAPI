import { Router } from "express";
import { createTaskController } from "../useCases/CreateTask";
import { deleteTaskController } from "../useCases/DeleteTask";
import { getSingleTaskController } from "../useCases/GetSingleTask";
import { listTasksController } from "../useCases/ListTasks";
import { updateTaskController } from "../useCases/UpdateTask";

const router = Router();

router.get('/', (request, response) => {
  return listTasksController.handle(request, response);
})

router.post('/', (request, response) => {
  return createTaskController.handle(request, response);
})

router.get('/:id', (request, response) => {
  return getSingleTaskController.handle(request, response);
})

router.put('/:id', (request, response) => {
  return updateTaskController.handle(request, response);
})

router.delete('/:id', (request, response) => {
  return deleteTaskController.handle(request, response);
})

export { router }