const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  const { description, priority, category } = req.body;
  const ticket = await Ticket.create({
    user: req.user._id,
    description,
    priority,
    category,
  });
  res.status(201).json(ticket);
};

exports.getMyTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.json(tickets);
};

exports.getAllTickets = async (req, res) => {
  const tickets = await Ticket.find().populate('user', 'name email');
  res.json(tickets);
};

exports.updateTicket = async (req, res) => {
  const { status, assignedTo } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    { status, assignedTo },
    { new: true }
  );
  res.json(ticket);
};
