import productsService from "../services/productsService.js";

const getAllProducts = async (req, res) => {
try {
    const products = await productController.getAllProducts();
    res.json(products);
} catch (error) {
    console.error("Error", error)
    res.status(500).json({ error: "Server error" });
}
}
const getProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productsService.getProduct(productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const deletedProduct = await productsService.deleteProduct(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updateProduct = req.body;
    const product = await productsService.updateProduct(
      productId,
      updateProduct
    );

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createdProduct = await productsService.createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const changeQuantity = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updateProduct = req.body;
    const product = await productsService.changeQuantity(
      productId,
      updateProduct
    );

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
export default {
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  changeQuantity,
};
