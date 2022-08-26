const axios = require("axios");

module.exports = {
  async getTopPlaylists(email) {
    return await axios.get(`http://localhost:5000/songs/top-playlists?email=${email}`);
  },

  async getNewReleases(email) {
    return await axios.get(`http://localhost:5000/songs/new-releases?email=${email}`);
  },
};
