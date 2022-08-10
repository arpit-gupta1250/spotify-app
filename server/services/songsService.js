const axios = require("axios");
const db = require("../data");

module.exports = {
  async getNewReleases(userEmail) {
    const token = getToken(userEmail);
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};

function getToken(userEmail) {
  const result = db.find((user) => user.email === userEmail);
  return result.token;
}