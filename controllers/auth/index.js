const singin = require('./singin');
const singup = require('./singup');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const { decorCtrlWrapp } = require('../../decorators');

module.exports = {
  singup: decorCtrlWrapp(singup),
  singin: decorCtrlWrapp(singin),
  getCurrent: decorCtrlWrapp(getCurrent),
  logout: decorCtrlWrapp(logout),
};
