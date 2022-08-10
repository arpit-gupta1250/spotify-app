const AuthService = require('../services/authService');

module.exports = {
  async authorizeRequest(req, res, next) {
    try {
      const authorizationCode = req.query.code;
      const result = await AuthService.saveAuthorizationToken(authorizationCode);

      res.redirect(`http://localhost:3000/authorized?email=${result.email}`);
    } catch (error) {
      console.log(error);
    }
  },
};