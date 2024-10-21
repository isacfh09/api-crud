
const Producto = require('../modelos/productosModelo');


const createProducto = async (req, res) => {
  const { nombre, precio, stock, descripcion } = req.body;

  try {
    const newProducto = new Producto({ nombre, precio, stock, descripcion });
    await newProducto.save();
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};


const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

const updateProductos = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock, descripcion } = req.body;

  try {
    const updatedProducto = await Producto.findByIdAndUpdate(
      id,
      { nombre, precio, stock, descripcion },
      { new: true } 
    );
    if (!updatedProducto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(updatedProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error });
  }
};


const deleteProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProducto = await Producto.findByIdAndDelete(id);
    if (!deletedProducto) {
      return res.status(404).json({ message: 'el Producto no fue encontrado' });
    }
    res.status(200).json({ message: 'el Producto fue eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};

module.exports = {
  createProducto,
  getProductos,
  updateProductos,
  deleteProducto,
};
