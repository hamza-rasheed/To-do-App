import Todo from "../models/todo.js";

export const viewTasks = async (req, res) => {
  try {
    const list = await Todo.find({}).sort({ timestamp: 1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const viewTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const list = await Todo.findById(_id).sort({ timestamp: 1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postTask = async (req, res) => {
  const { taskName } = req.body;
  try {
    if (taskName == null || taskName.length == 0) {
      res.status(400).json({ message: "Todo cannot be empty" });
    }

    await Todo.create({
      taskName: taskName,
      timestamp: new Date().toString(),
    });
    res.status(200).json({ message: "Todo posted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const list = await Todo.findById(_id);
    const data = await Todo.findByIdAndUpdate(
      _id,
      { completed: !list.completed },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Updation unsuccessful" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Todo.findByIdAndDelete(_id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("Deletion unsuccessful");
    res.status(404).json({ message: "Deletion unsuccessful" });
  }
};
