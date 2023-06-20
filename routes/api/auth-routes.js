const express = require('express');
const schema = require('../../schemas/user');
const { validateBody } = require('../../decorators');
const { authenticate } = require('../../middlewares');
const { singin, singup, logout, getCurrent } = require('../../controllers/auth');
const router = express.Router();

router.post('/users/register', validateBody(schema.userRegisterSchema), singup);

router.post('/users/login', validateBody(schema.userLoginSchema), singin);

router.post('/users/logout', authenticate, logout);

router.get('/users/current', authenticate, getCurrent);

module.exports = router;
