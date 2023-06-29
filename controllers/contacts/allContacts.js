const { Contact } = require('../../models');

const allContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Contact.find({ owner }, '-createdAt -updatedAt');
  res.json(result);
};

module.exports = allContacts;
