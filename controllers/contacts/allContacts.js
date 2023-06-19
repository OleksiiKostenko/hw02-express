const Contact = require("../../models/contacts");

const allContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = allContacts;
