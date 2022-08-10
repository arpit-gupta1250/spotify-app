const SongsService = require('../services/songsService');

module.exports = {
  async getNewReleases(req, res, next) {
    try {
      const userEmail = req.query.email;
      const newReleases = await SongsService.getNewReleases(userEmail);
      res.send(newReleases);
    } catch (error) {
      console.log(error);
    }
  }
};