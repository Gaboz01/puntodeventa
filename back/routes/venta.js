var express = require('express');
var ventaController = require('../controllers/VentaController');
var productoController = require('../controllers/ProductoController');

var api = express.Router();

api.post('/venta/registrar',ventaController.registrar);
//api.get('/venta/datos/:id',ventaController.datos_venta);
api.get('/venta/:id',ventaController.datos_venta);
api.get('/ventas',ventaController.listado_venta);
api.get('/venta/data/:id',ventaController.detalles_venta);
api.get('/venta/img/:img',productoController.get_img);


module.exports = api;
