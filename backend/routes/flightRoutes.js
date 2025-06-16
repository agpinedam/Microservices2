const express = require('express');
const router = express.Router();
const {
  getFlights,
  createFlight,
  reserveSeat
} = require('../controllers/flightController');

router.get('/', getFlights);
router.post('/', createFlight);
router.post('/:id/reserve', reserveSeat);

module.exports = router;
