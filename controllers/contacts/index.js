const addNewContact = require("./addNewContact");
const allContacts = require("./allContacts");
const changeContact = require("./changeContact");
const contactById = require("./contactById");
const deleteContactById = require("./deleteContactById");
const updateStatusContact = require("./updateStatusContact");

const { decorCtrlWrapp } = require("../../decorators");

module.exports = {
  addNewContact: decorCtrlWrapp(addNewContact),
  allContacts: decorCtrlWrapp(allContacts),
  contactById: decorCtrlWrapp(contactById),
  deleteContactById: decorCtrlWrapp(deleteContactById),
  changeContact: decorCtrlWrapp(changeContact),
  updateStatusContact: decorCtrlWrapp(updateStatusContact),
};
