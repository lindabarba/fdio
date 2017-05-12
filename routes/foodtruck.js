const express = require('express');
const router = express.Router();
const foodTruckController = require('./../controllers/foodTruckController');

/* RESTful route definitions */
router.get('/', foodTruckController.map);
router.get('/favorites', foodTruckController.index);
router.get('/favorites/new', foodTruckController.new);
router.post('/favorites', foodTruckController.create);
router.get('/favorites/:id/edit', foodTruckController.edit);
router.puts('/favorites', foodTruckController.update);
router.delete('/favorites', foodTruckController.delete);
router.get('/favorites/:id', foodTruckController.show);

module.exports = router;
