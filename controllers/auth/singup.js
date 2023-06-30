const { HttpError, transport } = require('../../helpers');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
require('dotenv').config();

const { BASE_URL, UKR_NET_EMAIL } = process.env;

const singup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const avatar = gravatar.url(email, { s: '200', r: 'x', d: 'retro' });
  const verificationToken = nanoid();
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL: avatar,
    verificationToken,
  });
  const verifyEmail = {
    from: UKR_NET_EMAIL,
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href='${BASE_URL}/api/auth/users/verify/${verificationToken}'>Click verify email</a>`,
  };
  await transport
    .sendMail(verifyEmail)
    .then(() => console.log('Email sucs'))
    .catch(er => console.log(er));

  res.status(201).json({
    user: {
      email: newUser.email,
      password: newUser.password,
      avatarURL: newUser.avatarURL,
    },
  });
};

module.exports = singup;
