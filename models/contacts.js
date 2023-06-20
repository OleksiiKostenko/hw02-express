const { Schema, model } = require('mongoose');
const { handelMongooseError } = require('../helpers');

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { versionKey: false, timestamps: true }
);

contactsSchema.post('save', handelMongooseError);

const Contact = model('contacts', contactsSchema);

module.exports = Contact;
