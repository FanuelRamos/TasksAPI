import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from  './app';
dotenv.config()

try {
  mongoose.connect(process.env.MONGO_URI);
  app.listen(process.env.PORT);
  console.log('Running');
} catch (error) {
  console.log(error);
}
