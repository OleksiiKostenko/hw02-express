const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const body = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = updateStatusContact;