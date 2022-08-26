const AuthService = require('../services/authService');

module.exports = {
  async authorizeRequest(req, res, next) {
    try {
      const authorizationCode = req.query.code;
      const result = await AuthService.saveAuthorizationToken(authorizationCode);

      res.redirect(`http://localhost:3000/?email=${result.email}`);
    } catch (error) {
      console.log(error);
    }
  },

  logout(req, res, next) {
    try {
      const result = AuthService.logout(req.body.loggedInEmail);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};