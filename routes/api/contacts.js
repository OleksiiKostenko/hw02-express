const express = require("express");
const {
  allContacts,
  contactById,
  addNewContact,
  deleteContactById,
  changeContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const schema = require("../../schemas/contact");
const { validateBody } = require("../../decorators");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", allContacts);

router.get("/:contactId", isValidId, contactById);

router.post("/", validateBody(schema.contactAddSchema), addNewContact);

router.delete("/:contactId", isValidId, deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schema.contactAddSchema),
  changeContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schema.contactUpdateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
