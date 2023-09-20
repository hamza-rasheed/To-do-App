import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  taskId: { type: String },
  taskName: { required: true, type: String },
  completed: { type: Boolean, default: false },
  timestamp: {
    type: String,
  },
});

export default mongoose.model("Todo", todoSchema);
