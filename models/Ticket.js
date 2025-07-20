const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  priority: String,
  category: String,
  status: { type: String, default: 'open' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
