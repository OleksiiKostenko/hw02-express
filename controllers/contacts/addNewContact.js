const { Contact } = require('../../models');

const addNewContact = async (req, res) => {
  const { _id: owner } = req.user;
  const body = req.body;
  const result = await Contact.create({ ...body, owner });
  res.status(201).json(result);
};

module.exports = addNewContact;
