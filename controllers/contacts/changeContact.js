const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const changeContact = async (req, res) => {
  const body = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with this ID:${contactId} is not found`);
  }
  res.json(result);
};

module.exports = changeContact;
