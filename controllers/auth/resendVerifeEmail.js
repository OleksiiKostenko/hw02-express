const { User } = require('../../models');
const { HttpError } = require('../../helpers');
require('dotenv').config();

const { BASE_URL, UKR_NET_EMAIL } = process.env;

const resendVerifeEmail = async (res, req) => {
  const { email } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    throw HttpError(400, 'missing required field email');
  }
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }
  const verifyEmail = {
    from: UKR_NET_EMAIL,
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href='${BASE_URL}/api/auth/users/verify/${user.verificationToken}'>Click verify email</a>`,
  };
  await transport
    .sendMail(verifyEmail)
    .then(() => console.log('Email sucs'))
    .catch(er => console.log(er));

  res.status(200).json({
    message: 'Verification email sent',
  });
};
module.exports = resendVerifeEmail;
