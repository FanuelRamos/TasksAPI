import mongoose from 'mongoose';
import { app } from  './app';

try {
  mongoose.connect('mongodb://127.0.0.1:27017/Task');
  app.listen(3000);
  console.log('Running');
} catch (error) {
  console.log(error);
}
