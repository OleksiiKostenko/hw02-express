const { Schema, model } = require("mongoose");
const { handelMongooseError } = require("../middlewares");

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
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
  },
  { versionKey: false, timestamps: true }
);

contactsSchema.post("save", handelMongooseError);

const Contact = model("contacts", contactsSchema);

module.exports = Contact;
