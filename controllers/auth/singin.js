const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const singin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const { SECRET_KEY } = process.env;
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }
  if (!user.verify) {
    throw HttpError(401, 'Verified you email');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }
  const { _id: id } = user;
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(id, { token });
  res.status(201).json({
    token,
    user: { email: user.email, password: user.password },
  });
};

module.exports = singin;
