const express = require('express');
const schema = require('../../schemas/user');
const { validateBody } = require('../../decorators');
const { authenticate, upload } = require('../../middlewares');
const {
  singin,
  singup,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendVerifeEmail,
} = require('../../controllers/auth');
const router = express.Router();

router.post('/users/register', validateBody(schema.userRegisterSchema), singup);

router.get('/users/verify/:verificationToken', verifyEmail);

router.post('/users/verify', validateBody(schema.emailSchema),resendVerifeEmail);

router.post('/users/login', validateBody(schema.userLoginSchema), singin);

router.post('/users/logout', authenticate, logout);

router.get('/users/current', authenticate, getCurrent);

router.get('/users/verify/:verificationToken');

router.patch('/users/avatars', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;
