const singin = require('./singin');
const singup = require('./singup');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifeEmail = require('./resendVerifeEmail');
const { decorCtrlWrapp } = require('../../decorators');

module.exports = {
  singup: decorCtrlWrapp(singup),
  singin: decorCtrlWrapp(singin),
  getCurrent: decorCtrlWrapp(getCurrent),
  logout: decorCtrlWrapp(logout),
  updateAvatar: decorCtrlWrapp(updateAvatar),
  verifyEmail: decorCtrlWrapp(verifyEmail),
  resendVerifeEmail: decorCtrlWrapp(resendVerifeEmail),
};
