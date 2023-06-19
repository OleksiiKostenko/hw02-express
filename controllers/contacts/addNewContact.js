const Contact = require("../../models/contacts");

const addNewContact = async (req, res) => {
  const body = req.body;
  const result = await Contact.create(body);
  res.status(201).json(result);
};

module.exports = addNewContact;
