import { compare, hash } from "bcrypt";
import joi from "joi";
import usersRepo from "./usersRepo.js";

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  isAdmin: joi.boolean().required(),
});

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const login = async (user) => {
    const { error } = loginSchema.validate(user);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }
    const userMatch = await usersRepo.login(user);
    console.log("service", userMatch);
    if (userMatch) {
      const passwordMatch = await compare(user.password, userMatch.password);
      console.log("service:", passwordMatch);
      return passwordMatch;
    } else {
      return false;
    }
  };
  const createUser = async (user) => {
    const { error } = userSchema.validate(user);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }
  
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
  
    return usersRepo.createUser(user);
  };
  
  const getUser = async (userId) => {
    return usersRepo.getUser(userId);
  };
  
  const getAllUsers = async () => {
    return usersRepo.getAllUsers();
  };
  
  const updateUser = async (userId, updatedUser) => {
    return usersRepo.updateUser(userId, updatedUser);
  };
  
  const deleteUser = async (userId) => {
    return usersRepo.deleteUser(userId);
  };
  
  export default {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    login,
  };