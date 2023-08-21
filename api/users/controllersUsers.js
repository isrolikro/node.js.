import userService from "./userServices.js";

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
const login = async (req, res) => {
  try {
    const userAndPass = req.body;
    console.log(userAndPass);
    const user = await userService.login(userAndPass);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(404).json({ error: "Server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userService.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateUsers = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const user = await userService.updateUser(userId, updatedUser);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deletedUser = await userService.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(deletedUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export default {
    getAllUsers,
    getUsers,
    deleteUsers,
    updateUsers,
    createUser,
    login,
}