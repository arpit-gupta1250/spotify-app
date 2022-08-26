const SongsService = require('../services/songsService');

module.exports = {
  async getTopPlaylist(req, res, next) {
    try {
      const userEmail = req.query.email;
      const topPlaylists = await SongsService.getTopPlaylist(userEmail);
      res.send(topPlaylists);
    } catch (error) {
      console.log(error);
    }
  },

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