const { decorCtrlWrapp } = require('../decorators');

const Contact = require('../models/contacts');

const allContacts = async (req, res) => {
  const result = await Contact.find({}, '-createdAt -updatedAt');
  res.json(result);
};

const contactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with this ID:${contactId} is not found`);
  }
  res.json(result);
};

const addNewContact = async (req, res) => {
  const body = req.body;
  const result = await Contact.create(body);
  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Operation fault, contact with this ID:${contactId} is not found`);
  }
  res.json({ message: 'contact deleted' });
};

const changeContact = async (req, res) => {
  const body = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with this ID:${contactId} is not found`);
  }
  res.json(result);
};
const updateStatusContact = async (req, res) => {
  const body = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, body, { new: true });
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
  addNewContact: decorCtrlWrapp(addNewContact),
  allContacts: decorCtrlWrapp(allContacts),
  contactById: decorCtrlWrapp(contactById),
  deleteContactById: decorCtrlWrapp(deleteContactById),
  changeContact: decorCtrlWrapp(changeContact),
  updateStatusContact: decorCtrlWrapp(updateStatusContact),
};
