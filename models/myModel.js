import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const MyTodoModel = mongoose.model("MyTodoModel", mySchema);

export default MyTodoModel;
