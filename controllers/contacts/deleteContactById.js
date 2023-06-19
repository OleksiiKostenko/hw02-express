const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(
      404,
      `Operation fault, contact with this ID:${contactId} is not found`
    );
  }
  res.json({ message: "contact deleted" });
};

module.exports = deleteContactById;
