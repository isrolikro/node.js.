import productsRepo from "./productsRepo.js";

import joi from "joi";

const newProductSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().positive().required(),
  description: joi.string().required(),
  category: joi.string().required(),
  image: joi.string().uri().required(),
  rating: joi
    .object({
      rate: joi.number().positive().max(5).required(),
      count: joi.number().integer().min(0).required(),
    })
    .required(),
  quantity: joi.number().integer().min(0).required(),
});

const updateProductSchema = joi.object({
  title: joi.string(),
  price: joi.number().positive(),
  description: joi.string(),
  category: joi.string(),
  image: joi.string().uri(),
  rating: joi.object({
    rate: joi.number().positive().max(5),
    count: joi.number().integer().min(0),
  }),
  quantity: joi.number().integer().min(0),
});

const createProduct = async (product) => {
  const { error } = newProductSchema.validate(product);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  return productsRepo.createProduct(product);
};

const getAllProducts = async () => {
  return productsRepo.getAllProducts();
};

const getProduct = async (productId) => {
  return productsRepo.getProduct(productId);
};

const deleteProduct = async (productId) => {
  return productsRepo.deleteProduct(productId);
};

const updateProduct = async (productId, newProduct) => {
  const { error } = newProductSchema.validate(newProduct);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }
  return productsRepo.updateProduct(productId, newProduct);
};

const changeQuantity = async (productId, newProduct) => {
  const { error } = updateProductSchema.validate(newProduct);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }
  return productsRepo.changeQuantity(productId, newProduct);
};

export default {
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  changeQuantity,
};
