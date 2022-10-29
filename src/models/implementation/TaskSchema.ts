import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [50, 'Name can not be more than 20 characters'],
    },
    description: {
      type: String,
      required: [true, 'must provide Description'],
      trim: true,
    },
    start: {
      type: Date,
      required: [true, 'must provide Date'],
      trim: true,
    },
    finish: {
      type: Date,
      required: [true, 'must provide Date'],
      trim: true,
    },
});
  
export default mongoose.model('Task', TaskSchema)