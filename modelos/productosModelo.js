
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },     
  precio: { type: Number, required: true },     
  stock: { type: Number, required: true },     
  descripcion: { type: String, required: false } 
}, {
  timestamps: true 
});


const Productos = mongoose.model('Productos', productSchema);

module.exports = Productos;
