import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
  return response.status(200).json({ msg: 'Get All Tasks' });
})

router.post('/', (request, response) => {
  return response.status(200).json({ msg: 'Create a Task' });
})

router.get('/:id', (request, response) => {
  return response.status(200).json({ msg: 'Get A Single Task' });
})

router.patch('/:id', (request, response) => {
  return response.status(200).json({ msg: 'Update A Task' });
})

router.delete('/:id', (request, response) => {
  return response.status(200).json({ msg: 'Delete A Task' });
})

export { router }