const express = require('express');
const contactsController = require('../../controllers/contacts-controller');
const schema = require('../../schemas/contact');
const { validateBody } = require('../../decorators');
const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', contactsController.allContacts);

router.get('/:contactId', isValidId, contactsController.contactById);

router.post('/', validateBody(schema.contactAddSchema), contactsController.addNewContact);

router.delete('/:contactId', isValidId, contactsController.deleteContactById);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schema.contactAddSchema),
  contactsController.changeContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schema.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
