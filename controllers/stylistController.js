const stylist = require('../models/stylistModel');

exports.create = async (req, res) => {
  try {
    const prodi = await stylist.create(req.body);
    res.status(201).json(stylist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await stylist.find());
};