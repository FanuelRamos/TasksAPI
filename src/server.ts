import mongoose from 'mongoose';
import { app } from  './app';

console.log('Running');

try {
  mongoose.connect('mongodb://127.0.0.1:27017/Tasks');
  app.listen(3000);
} catch (error) {
  console.log(error);
}
