const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const singup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    user: {
      email: newUser.email,
      password: newUser.password,
    },
  });
};

module.exports = singup;