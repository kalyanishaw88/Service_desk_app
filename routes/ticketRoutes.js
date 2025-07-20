const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createTicket,
  getMyTickets,
  getAllTickets,
  updateTicket,
} = require('../controllers/ticketController');

router.post('/', protect, createTicket);
router.get('/my', protect, getMyTickets);
router.get('/', protect, getAllTickets); // for admin
router.put('/:id', protect, updateTicket);

module.exports = router;
