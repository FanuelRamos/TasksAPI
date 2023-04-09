import mongoose from 'mongoose';
import { app } from  './app';

try {
  mongoose.connect('mongodb+srv://fanuelramos:11PTszA7bPrdmFKL@taskapi.zeapays.mongodb.net/?retryWrites=true&w=majority');
  app.listen(3000);
  console.log('Running');
} catch (error) {
  console.log(error);
}
