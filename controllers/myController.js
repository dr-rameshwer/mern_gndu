import MyTodoModel from "../models/myModel.js";

export const createTodo = async (req, res) => {
  try {
    const data = await MyTodoModel.create(req.body);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const data = await MyTodoModel.find();
    return res.status(200).json(data);
  } catch (err) {}
  return res.status(500).json({ mgs: err.message });
};
