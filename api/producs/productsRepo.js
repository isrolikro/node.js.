import fs from "fs/promises"; // Using promises version of fs
import { v4 } from "uuid";

const PRODUCTS_FILE_PATH = "C:/Users/isrolik rozen/Documents/development/20.08.projct/data.json";

const readProductsFromFile = async () => {
  const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf8");
  return JSON.parse(data);
};

const writeProductsToFile = async (products) => {
  const updatedDataJSON = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE_PATH, updatedDataJSON, "utf8");
};

const getAllProducts = async () => {
  const products = await readProductsFromFile();
  return products;
};

const getProduct = async (productId) => {
  const products = await readProductsFromFile();
  return products.find((product) => product.id == productId);
};

const deleteProduct = async (productId) => {
  const products = await readProductsFromFile();
  const productIndex = products.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    return null;
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  await writeProductsToFile(products);

  return deletedProduct;
};

const updateProduct = async (productId, newProduct) => {
  const products = await readProductsFromFile();
  const productIndex = products.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    return null;
  }

  products[productIndex] = { ...products[productIndex], ...newProduct };
  await writeProductsToFile(products);

  return products[productIndex];
};

const changeQuantity = async (productId, newProduct) => {
  const products = await readProductsFromFile();
  const productIndex = products.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    return null;
  }

  products[productIndex] = { ...products[productIndex], ...newProduct };
  await writeProductsToFile(products);

  return products[productIndex];
};

const createProduct = async (product) => {
  const products = await readProductsFromFile();
  product.id = v4();
  console.log(product);
  products.push(product);
  await writeProductsToFile(products);
  return product;
}

export default {
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  changeQuantity,
};
