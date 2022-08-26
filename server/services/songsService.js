const axios = require("axios");
const users = require("../users");

module.exports = {
  async getTopPlaylist(userEmail) {
    const token = users[userEmail];
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/featured-playlists?country=IN",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const playlists = response.data.playlists.items;
    let modifiedPlaylists = [];
    playlists.forEach((playlist) => {
      modifiedPlaylists.push({ 
        image: playlist.images[0].url, 
        name: playlist.name, 
        description: playlist.description, 
        totalTracks: playlist.tracks.total 
      });
    });
    return modifiedPlaylists;
  },

  async getNewReleases(userEmail) {
    const token = users[userEmail];
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases?country=IN",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const albums = response.data.albums.items;
    let modifiedAlbums = [];
    albums.forEach((album) => {
      modifiedAlbums.push({ 
        image: album.images[0].url, 
        name: album.name, 
        totalTracks: album.total_tracks 
      });
    });
    return modifiedAlbums;
  },
};