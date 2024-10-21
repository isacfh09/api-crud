
const express = require('express');
const {
  createProducto,
  getProductos,
  updateProductos,
  deleteProducto
} = require('../controlador/productosControlador');

const router = express.Router();

router.post('/', createProducto);

router.get('/', getProductos);

router.put('/:id', updateProductos);

router.delete('/:id', deleteProducto);

module.exports = router;
