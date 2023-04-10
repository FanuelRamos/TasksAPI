import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from  './app';
dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://fanuelramos:11PTszA7bPrdmFKL@taskapi.zeapays.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
      console.log("listening for requests");
  })
})
