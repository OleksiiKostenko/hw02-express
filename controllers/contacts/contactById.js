const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const contactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with this ID:${contactId} is not found`);
  }
  res.json(result);
};

module.exports = contactById;
